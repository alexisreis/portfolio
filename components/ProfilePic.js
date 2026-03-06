import Image from '@/components/Image';
import { useEffect, useRef } from 'react';

const useParallax = (ref, strength = 20) => {
  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      const { innerWidth, innerHeight } = window;
      const x = (clientX / innerWidth) * 100;
      const y = (clientY / innerHeight) * 100;

      if (ref.current) {
        ref.current.style.transform = `translate(-${x / strength}%, -${y / strength}%)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [ref, strength]);
};

const ProfilePic = () => {
  const backgroundRef = useRef(null);
  useParallax(backgroundRef);

  return (
    <div
      ref={backgroundRef}
      className="size-18 relative h-[150px] w-[150px] sm:h-[180px] sm:w-[180px]"
    >
      <div className="absolute inset-0 z-0 rounded-full bg-gradient-to-b from-primary-500 to-primary-900 shadow-xl shadow-gray-700" />
      <Image
        src="/static/images/profile.png"
        alt="avatar"
        width={200}
        height={200}
        className="absolute inset-0 z-10 h-full w-full rounded-full object-cover"
      />
    </div>
  );
};

export default ProfilePic;
