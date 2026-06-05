"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import * as THREE from "three";

// 品牌颜色（更鲜艳的版本）
const COLORS = ["#E8F594", "#F5B8C8", "#F78C59", "#97BDFC"];

// 物理参数配置
const PHYSICS_CONFIG = {
    friction: 0.995,          // 摩擦力
    bounce: 0.85,             // 边界回弹弹性
    collisionDistance: 1.5,   // 碰撞检测距离
    collisionForce: 0.03,     // 碰撞排斥力
    floatAmplitude: 0.012,    // 浮动幅度
    floatSpeed: 0.15,         // 浮动速度
    wheelForce: 0.005,        // 滚轮冲量
    rotationDamping: 0.998,   // 旋转阻尼
    clickForce: 0.25,         // 点击爆炸力
    clickRadius: 8,           // 点击影响半径
    clickGlobalImpulse: 0.03, // 点击全局扰动
  };

// 方块配置
const BOX_CONFIG = {
  count: 20,      // 方块数量
  minSize: 1.0,   // 最小尺寸
  maxSize: 2.0,   // 最大尺寸
};

interface DynamicBoundaries {
  x: [number, number];
  y: [number, number];
  z: [number, number];
}

const calculateBoundaries = (camera: THREE.PerspectiveCamera): DynamicBoundaries => {
  const targetZ = 0;
  const fov = camera.fov * (Math.PI / 180);
  const aspect = camera.aspect;
  const cameraZ = camera.position.z;
  const distance = cameraZ - targetZ;
  const halfHeight = Math.tan(fov / 2) * distance;
  const halfWidth = halfHeight * aspect;
  const margin = 0.1;
  
  return {
    x: [-halfWidth * (1 - margin), halfWidth * (1 - margin)],
    y: [-halfHeight * (1 - margin), halfHeight * (1 - margin)],
    z: [-4, 4],
  };
};

interface BoxData {
  mesh: THREE.Mesh;
  velocity: THREE.Vector3;
  angularVelocity: THREE.Vector3;
  floatOffset: number;
  initialPos: THREE.Vector3;
  size: number;
}

interface BackgroundAnimationsProps {
  menuOpen?: boolean;
}

export default function BackgroundAnimations({ menuOpen = false }: BackgroundAnimationsProps) {
  const pathname = usePathname();
  const containerRef = useRef<HTMLDivElement>(null);
  const [key, setKey] = useState(0);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const boxesRef = useRef<BoxData[]>([]);
  const animationIdRef = useRef<number>(0);
  const mousePositionRef = useRef({ x: 0, y: 0 });
  const scrollYRef = useRef(0);
  const boundariesRef = useRef<DynamicBoundaries>({
    x: [-4, 4],
    y: [-3, 3],
    z: [-3, 3],
  });
  const menuOpenRef = useRef(menuOpen);
  
  useEffect(() => {
    menuOpenRef.current = menuOpen;
  }, [menuOpen]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const hasLeftHome = sessionStorage.getItem('hasLeftHome');
    
    if (hasLeftHome === 'true' && pathname === '/') {
      sessionStorage.removeItem('hasLeftHome');
      setKey(prev => prev + 1);
    } else if (pathname === '/') {
      sessionStorage.setItem('hasLeftHome', 'true');
    }
  }, [pathname]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (!containerRef.current) return;

    scrollYRef.current = 0;
    window.scrollTo(0, 0);

    if (rendererRef.current) {
      if (containerRef.current.contains(rendererRef.current.domElement)) {
        containerRef.current.removeChild(rendererRef.current.domElement);
      }
      rendererRef.current.dispose();
      rendererRef.current = null;
    }

    if (animationIdRef.current) {
      cancelAnimationFrame(animationIdRef.current);
      animationIdRef.current = 0;
    }

    while (containerRef.current.firstChild) {
      containerRef.current.removeChild(containerRef.current.firstChild);
    }

    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 8;
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0xffffff, 1.2);
    pointLight1.position.set(10, 10, 10);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0xD7E294, 0.6);
    pointLight2.position.set(-10, -10, -10);
    scene.add(pointLight2);

    const pointLight3 = new THREE.PointLight(0xffffff, 0.5);
    pointLight3.position.set(0, 5, 5);
    scene.add(pointLight3);

    const boundaries = calculateBoundaries(camera);
    boundariesRef.current = boundaries;

    const boxes: BoxData[] = [];
    const randomSpeed = 0.002;

    // 创建所有方块（全部使用3D方块）
    for (let i = 0; i < BOX_CONFIG.count; i++) {
      const size = BOX_CONFIG.minSize + Math.random() * (BOX_CONFIG.maxSize - BOX_CONFIG.minSize);
      
      const halfSize = size / 2;
      const posX = boundaries.x[0] + halfSize + Math.random() * (boundaries.x[1] - boundaries.x[0] - size);
      const posY = boundaries.y[0] + halfSize + Math.random() * (boundaries.y[1] - boundaries.y[0] - size);
      const posZ = boundaries.z[0] + halfSize + Math.random() * (boundaries.z[1] - boundaries.z[0] - size);

      // 创建3D方块
      const geometry = new THREE.BoxGeometry(size, size, size);
      const material = new THREE.MeshStandardMaterial({
        color: COLORS[i % 4],
        roughness: 0.15,
        metalness: 0.1,
        emissive: COLORS[i % 4],
        emissiveIntensity: 0.45,
        flatShading: true,
      });
      
      const mesh = new THREE.Mesh(geometry, material);
      
      // 随机初始旋转
      mesh.rotation.set(
        Math.random() * Math.PI * 2,
        Math.random() * Math.PI * 2,
        Math.random() * Math.PI * 2
      );

      mesh.position.set(posX, posY, posZ);
      scene.add(mesh);

      boxes.push({
        mesh,
        velocity: new THREE.Vector3(
          (Math.random() - 0.5) * randomSpeed,
          (Math.random() - 0.5) * randomSpeed,
          (Math.random() - 0.5) * randomSpeed
        ),
        angularVelocity: new THREE.Vector3(0, 0, 0),
        floatOffset: (i / BOX_CONFIG.count) * Math.PI * 2,
        initialPos: new THREE.Vector3(posX, posY, posZ),
        size,
      });
    }
    
    console.log(`创建了 ${boxes.length} 个方块`);
    boxesRef.current = boxes;

    const handleMouseMove = (e: MouseEvent) => {
      mousePositionRef.current = {
        x: (e.clientX / window.innerWidth - 0.5) * 6,
        y: -(e.clientY / window.innerHeight - 0.5) * 6,
      };
    };
    window.addEventListener("mousemove", handleMouseMove);

    const handleClick = (e: MouseEvent) => {
      const raycaster = new THREE.Raycaster();
      const mouse = new THREE.Vector2();
      
      mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
      
      raycaster.setFromCamera(mouse, camera);
      
      const meshes = boxesRef.current.map(box => box.mesh);
      const intersects = raycaster.intersectObjects(meshes);
      
      const clickPoint = new THREE.Vector3();
      const direction = raycaster.ray.direction.clone();
      
      if (intersects.length > 0) {
        clickPoint.copy(intersects[0].point);
      } else {
        clickPoint.copy(raycaster.ray.origin).add(direction.multiplyScalar(6));
      }
      
      boxesRef.current.forEach((box) => {
        const pos = box.mesh.position;
        const dx = pos.x - clickPoint.x;
        const dy = pos.y - clickPoint.y;
        const dz = pos.z - clickPoint.z;
        const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);
        
        if (distance < PHYSICS_CONFIG.clickRadius && distance > 0.1) {
          const force = (PHYSICS_CONFIG.clickRadius - distance) / PHYSICS_CONFIG.clickRadius;
          const impulse = force * PHYSICS_CONFIG.clickForce;
          
          const nx = dx / distance;
          const ny = dy / distance;
          const nz = dz / distance;
          
          box.velocity.x += nx * impulse;
          box.velocity.y += ny * impulse;
          box.velocity.z += nz * impulse;
        } else {
          box.velocity.x += (Math.random() - 0.5) * PHYSICS_CONFIG.clickGlobalImpulse;
          box.velocity.y += (Math.random() - 0.5) * PHYSICS_CONFIG.clickGlobalImpulse;
          box.velocity.z += (Math.random() - 0.5) * PHYSICS_CONFIG.clickGlobalImpulse;
        }
      });
    };
    window.addEventListener("click", handleClick);

    const handleWheel = (e: Event) => {
      const wheelEvent = e as WheelEvent;
      if (!menuOpenRef.current) {
        wheelEvent.preventDefault();
      }
      const delta = wheelEvent.deltaY > 0 ? 1 : -1;
      const impulse = PHYSICS_CONFIG.wheelForce * Math.abs(wheelEvent.deltaY) * 0.05;
      
      boxesRef.current.forEach((box) => {
        const pos = box.mesh.position;
        const dy = pos.y;
        const dz = pos.z;
        const dist = Math.sqrt(dy * dy + dz * dz);
        
        if (dist > 0.1) {
          const tangentY = -dz / dist;
          const tangentZ = dy / dist;
          
          box.velocity.y += tangentY * delta * impulse;
          box.velocity.z += tangentZ * delta * impulse;
        }
      });
    };
    window.addEventListener("wheel", handleWheel as EventListener, { passive: false });

    const handleScroll = () => {
      scrollYRef.current = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll);

    const handleResize = () => {
      if (!cameraRef.current || !rendererRef.current) return;
      cameraRef.current.aspect = window.innerWidth / window.innerHeight;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(window.innerWidth, window.innerHeight);
      
      boundariesRef.current = calculateBoundaries(cameraRef.current);
      
      boxesRef.current.forEach((box) => {
        handleBoundaryCollision(box);
      });
    };
    window.addEventListener("resize", handleResize);

    const handleBoundaryCollision = (box: BoxData) => {
      const pos = box.mesh.position;
      const bounce = PHYSICS_CONFIG.bounce;
      const halfSize = box.size / 2;
      const boundaries = boundariesRef.current;
      
      if (pos.x < boundaries.x[0] + halfSize) {
        pos.x = boundaries.x[0] + halfSize;
        box.velocity.x = -box.velocity.x * bounce;
      } else if (pos.x > boundaries.x[1] - halfSize) {
        pos.x = boundaries.x[1] - halfSize;
        box.velocity.x = -box.velocity.x * bounce;
      }
      
      if (pos.y < boundaries.y[0] + halfSize) {
        pos.y = boundaries.y[0] + halfSize;
        box.velocity.y = -box.velocity.y * bounce;
      } else if (pos.y > boundaries.y[1] - halfSize) {
        pos.y = boundaries.y[1] - halfSize;
        box.velocity.y = -box.velocity.y * bounce;
      }
      
      if (pos.z < boundaries.z[0] + halfSize) {
        pos.z = boundaries.z[0] + halfSize;
        box.velocity.z = -box.velocity.z * bounce;
      } else if (pos.z > boundaries.z[1] - halfSize) {
        pos.z = boundaries.z[1] - halfSize;
        box.velocity.z = -box.velocity.z * bounce;
      }
    };

    const handleCollisions = () => {
      const boxes = boxesRef.current;
      
      for (let i = 0; i < boxes.length; i++) {
        for (let j = i + 1; j < boxes.length; j++) {
          const box1 = boxes[i];
          const box2 = boxes[j];
          
          const dx = box2.mesh.position.x - box1.mesh.position.x;
          const dy = box2.mesh.position.y - box1.mesh.position.y;
          const dz = box2.mesh.position.z - box1.mesh.position.z;
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
          
          if (dist < PHYSICS_CONFIG.collisionDistance && dist > 0.1) {
            const force = (PHYSICS_CONFIG.collisionDistance - dist) / dist * PHYSICS_CONFIG.collisionForce;
            
            box1.velocity.x -= dx * force;
            box1.velocity.y -= dy * force;
            box1.velocity.z -= dz * force;
            
            box2.velocity.x += dx * force;
            box2.velocity.y += dy * force;
            box2.velocity.z += dz * force;
          }
        }
      }
    };

    const animate = () => {
      animationIdRef.current = requestAnimationFrame(animate);

      const time = performance.now() / 1000;

      handleCollisions();

      boxesRef.current.forEach((box) => {
        const floatX = Math.sin(time * PHYSICS_CONFIG.floatSpeed + box.floatOffset) * PHYSICS_CONFIG.floatAmplitude;
        const floatY = Math.cos(time * PHYSICS_CONFIG.floatSpeed * 0.8 + box.floatOffset * 1.2) * PHYSICS_CONFIG.floatAmplitude;
        const floatZ = Math.sin(time * PHYSICS_CONFIG.floatSpeed * 1.2 + box.floatOffset * 0.8) * PHYSICS_CONFIG.floatAmplitude;

        box.velocity.multiplyScalar(PHYSICS_CONFIG.friction);
        box.angularVelocity.x *= PHYSICS_CONFIG.rotationDamping;
        box.angularVelocity.y *= PHYSICS_CONFIG.rotationDamping;
        box.angularVelocity.z *= PHYSICS_CONFIG.rotationDamping;

        box.mesh.position.x += box.velocity.x + floatX;
        box.mesh.position.y += box.velocity.y + floatY;
        box.mesh.position.z += box.velocity.z + floatZ;

        handleBoundaryCollision(box);

        // 方块旋转
        box.mesh.rotation.x += box.angularVelocity.x + box.velocity.y * 0.05;
        box.mesh.rotation.y += box.angularVelocity.y + box.velocity.x * 0.05;

        const maxSpeed = 0.2;
        const speed = box.velocity.length();
        if (speed > maxSpeed) {
          box.velocity.multiplyScalar(maxSpeed / speed);
        }
      });

      if (cameraRef.current) {
        const targetY = scrollYRef.current * 0.01;
        cameraRef.current.position.y +=
          (targetY - cameraRef.current.position.y) * 0.05;
        cameraRef.current.position.z = 8 + scrollYRef.current * 0.005;
      }

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationIdRef.current);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("click", handleClick);
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
      rendererRef.current = null;
      sceneRef.current = null;
      cameraRef.current = null;
      boxesRef.current = [];
      boxes.forEach((box) => {
        box.mesh.geometry.dispose();
        (box.mesh.material as THREE.Material).dispose();
      });
    };
  }, [key]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-0"
      style={{
        background: "linear-gradient(180deg, #fafafa 0%, #f5f5f5 100%)",
      }}
    />
  );
}
