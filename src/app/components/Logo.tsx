export default function Logo({
  theme = "light",
  className = "",
}: {
  theme?: "light" | "dark";
  className?: string;
}) {
  const fillColor = theme === "dark" ? "#fff" : "#000";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 340 250"
      preserveAspectRatio="xMidYMid meet"
      width="70%"
      height="100%"
      className={className}
      style={{ margin: "0", display: "block",}}
    >
      <g fill={fillColor} transform="translate(50.95, 102.75)">
        {/* Triangle + Inner Symbol */}
        <g>
          <rect
            fill={fillColor}
            fillOpacity="0"
            strokeWidth="2"
            x="0"
            y="0"
            width="44.5"
            height="44.5"
          />
          <svg
            viewBox="0 0 60 54.06"
            x="0"
            y="0"
            width="44.5"
            height="44.5"
            style={{ overflow: "visible" }}
          >
            <g>
              <svg
                viewBox="0 0 65 58.564"
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="54.06"
                style={{ overflow: "visible" }}
              >
                <g transform="scale(1)">
                  <path
                    d="M32.5 0L65 58.564H0L32.5 0zm0 6.183L5.096 55.564h54.807L32.5 6.183z"
                    fill={fillColor}
                    fillRule="nonzero"
                  />
                </g>
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                viewBox="92 43 662 761.523"
                x="10"
                y="9"
                width="40"
                height="36.04"
                fillRule="evenodd"
                clipRule="evenodd"
              >
                <path
                  d="M521 689l43 1c26,149 159,151 190,9l0 -347c-4,-414 -662,-415 -662,15l0 322c19,156 155,149 189,0l53 0c27,155 165,153 186,0zm-153 -335c-9,72 -67,93 -140,71l0 -32c90,-14 72,-123 -27,-95 23,-145 191,-142 167,56zm275 0c-21,70 -67,93 -140,71l0 -32c90,-12 68,-128 -27,-95 1,-149 181,-153 167,56z"
                  fill={fillColor}
                />
              </svg>
            </g>
          </svg>
        </g>

        {/* Text Paths */}
        <g transform="translate(56, 11.05)" fill={fillColor}>
          <path d="M25.12 0.09L17.89 0.09L6.59-11.22L6.59 0L1.49 0L1.49-29.71L6.59-29.71L6.59-18.45L17.81-29.67L25.03-29.67L10.2-14.83L25.12 0.09Z" transform="translate(-1.49, 29.79)" />
        </g>
        <g transform="translate(84, 11.05)" fill={fillColor}>
          <path d="M6.59-19.64Q7.78-20.61 9.29-21.25Q10.8-21.89 12.71-21.89L12.71-16.79Q10.16-16.79 8.37-15Q6.59-13.13 6.59-10.67L6.59 0L1.49 0L1.49-10.67L1.49-21.29L6.59-21.29L6.59-19.64Z" transform="translate(-1.49, 29.79)" />
        </g>
        <g transform="translate(100, 11.05)" fill={fillColor}>
          <path d="M6.59 0L1.49 0L1.49-21.25L6.59-21.25L6.59 0ZM1.49-24.65L1.49-29.75L6.59-29.75L6.59-24.65L1.49-24.65Z" transform="translate(-1.49, 29.79)" />
        </g>
        <g transform="translate(110, 11.05)" fill={fillColor}>
          <path d="M18.15-29.79L23.25-29.79L23.25 0L18.15 0L18.15-10.63Q18.15-13.22 16.36-14.96Q14.58-16.75 12.07-16.75Q9.52-16.75 7.74-14.96Q5.95-13.18 5.95-10.63Q5.95-8.12 7.74-6.33Q8.59-5.44 9.71-4.99Q10.84-4.55 12.07-4.55Q13.3-4.55 14.32-4.97L16.15-0.43Q14.2 0.55 11.65 0.55Q9.31 0.55 7.33-0.32Q5.36-1.19 3.91-2.72Q2.47-4.25 1.66-6.29Q0.85-8.33 0.85-10.63Q0.85-12.96 1.66-15Q2.47-17.04 3.91-18.57Q5.36-20.1 7.33-20.98Q9.31-21.85 11.65-21.85Q13.69-21.85 15.3-21.21Q16.92-20.57 18.15-19.59L18.15-29.79Z" transform="translate(-0.85, 29.79)" />
        </g>
        <g transform="translate(137, 11.05)" fill={fillColor}>
          <path d="M16.11-21.25L21.21-21.25L21.21 0L16.11 0L16.11-1.62Q14.96-0.64 13.52-0.02Q12.07 0.6 10.29 0.6Q8.2 0.6 6.5-0.19Q4.8-0.98 3.59-2.34Q2.38-3.7 1.72-5.53Q1.06-7.35 1.06-9.44L1.06-21.25L6.16-21.25L6.16-9.44Q6.16-7.44 7.65-5.95Q9.1-4.51 11.14-4.51Q13.22-4.51 14.66-5.95Q16.11-7.4 16.11-9.44L16.11-21.25Z" transform="translate(-1.06, 29.79)" />
        </g>
        <g transform="translate(162, 11.05283903078247)">
            <g data-gra="path-name" fill={fillColor} transform="scale(1)">
              <path
                d="M24.06-21.85L24.06-21.85Q25.84-21.85 27.18-21.17Q28.52-20.49 29.37-19.30Q30.22-18.11 30.64-16.53Q31.07-14.96 31.07-13.13L31.07-13.13L31.07 0L25.97 0L25.97-13.13Q25.97-14.62 24.91-15.68L24.91-15.68Q23.89-16.75 22.36-16.75L22.36-16.75Q20.83-16.75 19.81-15.68L19.81-15.68Q18.74-14.62 18.74-13.13L18.74-13.13L18.74 0L13.64 0L13.64-13.13Q13.64-14.62 12.58-15.68L12.58-15.68Q12.07-16.24 11.41-16.49Q10.75-16.75 10.03-16.75L10.03-16.75Q8.46-16.75 7.44-15.68L7.44-15.68Q6.38-14.62 6.38-13.13L6.38-13.13L6.38 0L1.28 0L1.28-21.25L6.38-21.25L6.38-19.38Q7.61-20.44 8.97-21.15Q10.33-21.85 11.73-21.85L11.73-21.85Q13.64-21.85 14.88-21.08Q16.11-20.32 17.09-18.96L17.09-18.96Q18.23-20.19 20.06-21.02Q21.89-21.85 24.06-21.85Z"
                transform="translate(-1.2750885478158205, 29.794569067296337)"
              ></path>
            </g>
          </g>
        <g transform="translate(196, 11.05283903078247)">
            <g data-gra="path-name" fill={fillColor} transform="scale(1)">
              <path
                d="M19.47-29.75L19.47-29.75L32.90 0L27.29 0L24.99-5.10L24.99-5.10L22.70-10.20L22.70-10.20L16.66-23.55L10.63-10.20L18.36-10.20L20.66-5.10L8.33-5.10L6.04 0L0.43 0L13.86-29.75L19.47-29.75Z"
                transform="translate(-0.42502951593860683, 29.794569067296337)"
              ></path>
            </g>
          </g>
        <g transform="translate(233, 11.05283903078247)">
            <g data-gra="path-name" fill={fillColor} transform="scale(1)">
              <path
                d="M6.80-29.71L6.80-29.71L6.80 0L1.70 0L1.70-29.71L6.80-29.71Z"
                transform="translate(-1.7001180637544273, 29.794569067296337)"
              ></path>
            </g>
          </g>
        </g>
    </svg>
  );
}
