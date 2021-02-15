<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    width="129"
    height="20"
    role="img"
    aria-label="Powered by Genesys"
  >
    <title>Powered by Genesys</title>
    <clipPath xmlns="http://www.w3.org/2000/svg" id="a">
      <rect width="127" height="20" rx="3" fill="#ffffff" />
    </clipPath>
    <g clip-path="url(#a)">
      <rect width="24" height="20" fill="#FFFFFF" />
      <rect x="24" width="105" height="20" fill="#FFFFFF" />
    </g>
    <g
      text-anchor="middle"
      font-family="Roboto,Verdana,Geneva,DejaVu Sans,sans-serif"
      text-rendering="geometricPrecision"
      font-size="110"
    >
      <image
        x="5"
        y="3"
        width="14"
        height="14"
        xlink:href="https://github.com/genesys.png"
      />
      <text
        x="722"
        y="140"
        transform="scale(.1)"
        fill="#FF4F1F"
        textLength="950"
      >
        Powered by Genesys
      </text>
    </g>
  </svg>
</template>

<script>
export default {
  name: "Badge",
};
</script>
