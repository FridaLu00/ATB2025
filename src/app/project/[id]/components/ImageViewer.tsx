'use client';

import Lightbox from 'yet-another-react-lightbox';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/styles.css';

interface ImageViewerProps {
  images: string[];
  initialIndex?: number;
  onClose: () => void;
}

export default function ImageViewer({ images, initialIndex = 0, onClose }: ImageViewerProps) {
  const slides = images.map((src) => ({ src }));

  return (
    <Lightbox
      open={true}
      close={onClose}
      slides={slides}
      index={initialIndex}
      plugins={[Zoom]}
      zoom={{
        maxZoomPixelRatio: 5,
        minZoom: 0.25,
        doubleClickMaxStops: 0, // 禁用双击放大（设为0表示不允许双击放大）
        wheelZoomDistanceFactor: 300, // 降低滚轮灵敏度（默认100，值越大越不敏感）
      }}
      toolbar={{ buttons: ['close'] }}
      styles={{
        container: { backgroundColor: 'rgba(0, 0, 0, 0.95)' },
      }}
    />
  );
}