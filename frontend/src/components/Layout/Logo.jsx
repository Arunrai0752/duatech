import React from 'react';

const Logo = () => {
  return (
    <div className="flex items-center gap-2 font-black italic tracking-tighter text-2xl cursor-pointer">
      <div className="w-9 h-9 bg-[#00FF88] flex items-center justify-center rounded-sm rotate-12 shadow-[0_0_20px_#00FF88]">
        <span className="text-[#0A1F44] -rotate-12 font-black">D</span>
      </div>
      <div className="flex flex-col leading-none">
        <span className="text-white text-xl">DUVA</span>
        <span className="text-[#00FF88] text-sm tracking-[0.2em] drop-shadow-[0_0_5px_#00FF88]">TECH</span>
      </div>
    </div>
  );
};

export default Logo;
