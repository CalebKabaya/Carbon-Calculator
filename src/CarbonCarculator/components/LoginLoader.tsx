import Lottie from 'lottie-react';
import animationData from "assets/images/Infinite-Loop-With-Ball.json";
import { Box } from "@mui/material";
import React from 'react';

const InfiniteLoopAnimation = ({ width = 100, height = 100 }) => {
  return (
    <Box className="w-full flex justify-center items-center">
      <Lottie
        animationData={animationData}
        style={{ width: width, height: height }}
        loop={true}
        autoplay={true}
      />
    </Box>
  );
};

export default InfiniteLoopAnimation;