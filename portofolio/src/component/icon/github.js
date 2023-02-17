import React from "react";

function Github() {
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
      className="h-11 w-11"
      style={style.filter}
    >
      <path
        d="M2247 4995C1204 4869 334 4114 80 3115c-59-234-74-356-74-610-1-129 5-259 13-315C127 1407 555 759 1231 349c206-124 479-239 570-239 45 0 55 4 85 34 22 22 34 44 35 63 2 40-3 448-4 449s-42-5-92-13c-108-17-273-12-360 12-115 30-202 79-279 158-64 63-81 90-144 217-83 169-138 244-230 308-142 100-165 144-87 171 31 10 54 11 103 3 136-22 259-109 355-251 120-178 219-247 389-271 78-11 185 1 285 31 71 22 71 22 98 131 18 70 67 163 111 209l25 26-63 7c-103 12-293 55-386 88-168 59-276 123-395 237-222 212-326 520-314 931 4 141 9 178 31 255 36 121 88 223 164 323 48 64 60 86 53 100-21 40-41 168-41 261 0 107 18 219 50 317 25 73 38 78 145 63 136-19 330-99 506-209 71-45 80-48 111-39 84 24 309 59 450 69 228 17 538-10 737-64l54-15 91 56c175 108 358 183 495 203 108 15 117 10 145-79 13-42 29-111 36-154 17-103 8-293-17-372l-19-60 46-56c150-187 212-376 211-645-1-671-304-1054-930-1179-64-12-142-26-174-30l-58-7 35-38c43-48 88-135 112-216 15-51 18-122 23-504 5-334 9-451 19-467 17-31 63-53 108-53 93 0 453 163 659 297 165 109 299 219 435 359 385 395 615 869 691 1424 20 144 17 507-5 655-172 1140-1081 2015-2234 2150-154 18-464 18-615 0z"
        transform="matrix(.1 0 0 -.1 0 512)"
      ></path>
    </svg>
  );
}

export default Github;
