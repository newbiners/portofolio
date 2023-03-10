import React from "react";

function Youtube() {
    const style = {
        filter: {
          filter: 'invert(100%)',
            // opacity: '0.5'
        }
      }
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="682.667"
      height="682.667"
      version="1"
      viewBox="0 0 512 512"
      className="sm:h-11 sm:w-11 xs:h-6 xs:w-6"
      style={style.filter}
    >
      <path
        d="M2315 5109c-800-83-1501-518-1927-1196-604-960-491-2230 272-3065 423-463 951-740 1585-830 118-17 511-16 635 0 579 80 1097 337 1491 739 130 132 157 163 243 277 256 341 423 757 488 1211 17 118 17 512 0 630-43 303-122 561-247 814-134 268-270 459-483 674-395 400-889 649-1457 733-123 18-478 26-600 13zm800-1439c616-22 747-46 863-154 96-90 136-209 163-491 17-174 18-730 1-910-26-272-51-375-111-455-83-110-165-152-349-175-493-62-1923-56-2304 10-196 34-320 150-361 340-48 218-69 677-47 1030 25 411 55 528 161 640 91 96 177 123 464 145 352 28 1056 37 1520 20z"
        transform="matrix(.1 0 0 -.1 0 512)"
      ></path>
      <path
        d="M2240 2560v-480l48 27c615 352 781 449 781 453s-166 101-781 453l-48 27v-480z"
        transform="matrix(.1 0 0 -.1 0 512)"
      ></path>
    </svg>
  );
}

export default Youtube;
