import React from "react";

function Linkedintow() {
  const style = {
    filter: {
      filter: 'invert(100%)',
        // opacity: '0.5'
    }
  }
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit="2"
      clipRule="evenodd"
      viewBox="0 0 512 512"
      className="sm:h-11 sm:w-11 xs:h-6 xs:w-6"
      style={style.filter}
    >
      <path d="M256 0c141.29 0 256 114.71 256 256 0 141.29-114.71 256-256 256C114.71 512 0 397.29 0 256 0 114.71 114.71 0 256 0zm-80.037 399.871V199.95h-66.464v199.921h66.464zm239.62 0V285.225c0-61.409-32.787-89.976-76.509-89.976-35.255 0-51.047 19.389-59.889 33.007V199.95h-66.447c.881 18.757 0 199.921 0 199.921h66.446v-111.65c0-5.976.43-11.95 2.191-16.221 4.795-11.935 15.737-24.299 34.095-24.299 24.034 0 33.663 18.34 33.663 45.204v106.966h66.45zM143.18 103.55c-22.74 0-37.597 14.95-37.597 34.545 0 19.182 14.405 34.544 36.717 34.544h.429c23.175 0 37.6-15.362 37.6-34.544-.43-19.595-14.424-34.545-37.149-34.545z"></path>
    </svg>
  );
}

export default Linkedintow;
