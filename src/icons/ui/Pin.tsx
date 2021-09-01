import React, { forwardRef, Ref, SVGAttributes } from 'react';

export const Pin = forwardRef(
  (props: SVGAttributes<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" ref={ref} {...props}>
      <path d="M5.21574 19.6324L5.85619 20.4004L5.85641 20.4002L5.21574 19.6324ZM4.33485 19.6441L3.63232 20.3557L3.63392 20.3573L4.33485 19.6441ZM4.34867 18.7504L5.11001 19.3988L5.11157 19.3969L4.34867 18.7504ZM7.25059 15.3236L8.01353 15.9701L8.02 15.9623L7.25059 15.3236ZM7.40679 15.1451L8.11698 14.4411L7.3678 13.6853L6.66002 14.48L7.40679 15.1451ZM8.85191 16.6019L9.48964 17.3721L10.333 16.6739L9.56132 15.8971L8.85191 16.6019ZM19.6626 10.6493L20.3709 11.3552L20.3734 11.3527L19.6626 10.6493ZM18.3376 10.4569L19.0447 9.74983L18.2249 8.93005L17.5343 9.86129L18.3376 10.4569ZM14.1361 16.1152L14.9101 16.7485L14.9241 16.7313L14.9374 16.7135L14.1361 16.1152ZM14.0904 16.1864L13.2125 15.7076L12.9832 16.128L13.1671 16.5703L14.0904 16.1864ZM14.0522 19.7992L14.7557 20.5099L14.778 20.4878L14.799 20.4643L14.0522 19.7992ZM13.3594 19.846L14.0665 19.1388L14.0664 19.1388L13.3594 19.846ZM4.1393 10.627L3.4309 11.3328L3.43224 11.3341L4.1393 10.627ZM4.17649 9.97346L4.87498 10.6892L4.8836 10.6806L4.17649 9.97346ZM7.86898 9.93308L7.47853 10.8537L7.90341 11.0339L8.31619 10.8275L7.86898 9.93308ZM7.87642 9.92883L7.28833 9.12004L7.22483 9.16621L7.16931 9.22173L7.87642 9.92883ZM13.6176 5.73693L14.2078 6.54419L15.1501 5.85524L14.3247 5.02982L13.6176 5.73693ZM13.3509 5.47022L12.6438 6.17733V6.17733L13.3509 5.47022ZM13.3509 4.33857L14.058 5.04567L14.058 5.04567L13.3509 4.33857ZM13.455 4.23443L12.7491 3.52613L12.7479 3.52733L13.455 4.23443ZM14.5867 4.23337L15.2938 3.52634L15.2938 3.52626L14.5867 4.23337ZM19.7657 9.41348L19.0585 10.1205L19.0586 10.1206L19.7657 9.41348ZM7.06094 16.791C6.23182 17.482 5.40268 18.174 4.57507 18.8646L5.85641 20.4002C6.6843 19.7094 7.5128 19.0179 8.34131 18.3275L7.06094 16.791ZM4.57528 18.8644C4.56056 18.8767 4.61658 18.8247 4.74272 18.8232C4.88218 18.8215 4.98749 18.8834 5.03578 18.9308L3.63392 20.3573C3.92873 20.647 4.32413 20.8285 4.76722 20.823C5.197 20.8178 5.5702 20.6389 5.85619 20.4004L4.57528 18.8644ZM5.03738 18.9324C5.09446 18.9888 5.15456 19.0986 5.15235 19.2342C5.15037 19.356 5.10047 19.41 5.11001 19.3988L3.58732 18.1021C3.34078 18.3916 3.15965 18.7697 3.15262 19.2017C3.14536 19.6476 3.3266 20.0539 3.63232 20.3557L5.03738 18.9324ZM5.11157 19.3969C5.59578 18.8256 6.07943 18.2542 6.56288 17.6831C7.04639 17.1119 7.52969 16.541 8.01349 15.9701L6.48769 14.6771C6.00348 15.2485 5.51982 15.8198 5.03638 16.3909C4.55287 16.9621 4.06957 17.533 3.58576 18.1039L5.11157 19.3969ZM8.02 15.9623C8.05263 15.923 8.08617 15.8858 8.15355 15.8102L6.66002 14.48C6.60627 14.5403 6.54205 14.6115 6.48118 14.6848L8.02 15.9623ZM6.6966 15.8491C7.17996 16.3367 7.65642 16.8174 8.14249 17.3067L9.56132 15.8971C9.07619 15.4088 8.60057 14.9289 8.11698 14.4411L6.6966 15.8491ZM8.21417 15.8316C7.81786 16.1597 7.43824 16.4754 7.05946 16.7923L8.3428 18.3262C8.71845 18.012 9.09539 17.6986 9.48964 17.3721L8.21417 15.8316ZM19.055 9.84166L18.9519 9.9458L20.3734 11.3527L20.4764 11.2486L19.055 9.84166ZM18.9543 9.94336C19.0334 9.86404 19.1606 9.86576 19.237 9.94216L17.8228 11.3564C18.5261 12.0597 19.6671 12.0614 20.3709 11.3552L18.9543 9.94336ZM19.237 9.94216L19.0447 9.74983L17.6305 11.164L17.8228 11.3564L19.237 9.94216ZM17.5343 9.86129C16.1338 11.7499 14.7393 13.6358 13.3348 15.517L14.9374 16.7135C16.3445 14.8288 17.7425 12.9383 19.1408 11.0526L17.5343 9.86129ZM13.3622 15.482C13.2791 15.5835 13.2276 15.6799 13.2125 15.7076L14.9683 16.6653C14.9731 16.6565 14.9684 16.6655 14.9599 16.6791C14.9505 16.6943 14.934 16.7192 14.9101 16.7485L13.3622 15.482ZM13.1671 16.5703C13.754 17.9819 13.592 18.8123 13.3054 19.1341L14.799 20.4643C15.8958 19.2326 15.6701 17.381 15.0138 15.8025L13.1671 16.5703ZM13.3487 19.0885C13.3192 19.1177 13.3232 19.1125 13.3335 19.1046C13.3438 19.0966 13.3924 19.0598 13.4772 19.0321C13.5731 19.0008 13.7037 18.9857 13.8433 19.0224C13.9776 19.0577 14.0502 19.1225 14.0665 19.1388L12.6523 20.5531C12.8301 20.7309 13.0568 20.8836 13.3349 20.9567C13.6183 21.0312 13.8822 21.0037 14.0977 20.9334C14.4751 20.8103 14.7243 20.541 14.7557 20.5099L13.3487 19.0885ZM14.0664 19.1388L4.84637 9.91981L3.43224 11.3341L12.6523 20.5531L14.0664 19.1388ZM4.8477 9.92114C4.88232 9.95589 4.94735 10.0387 4.98063 10.1722C5.01376 10.3051 4.99951 10.4244 4.97462 10.5081C4.95182 10.5848 4.92052 10.6324 4.90742 10.6508C4.89299 10.671 4.88106 10.6832 4.87492 10.6891L3.47806 9.25779C3.39685 9.33704 3.16581 9.57385 3.05746 9.93847C2.99804 10.1385 2.9729 10.3868 3.04003 10.656C3.10731 10.9259 3.25124 11.1524 3.4309 11.3328L4.8477 9.92114ZM4.8836 10.6806C5.01586 10.5483 5.26389 10.4244 5.72607 10.4265C6.19143 10.4286 6.7918 10.5625 7.47853 10.8537L8.25943 9.01246C7.41285 8.65341 6.5442 8.43022 5.73524 8.42651C4.92312 8.42278 4.09156 8.64418 3.46939 9.26636L4.8836 10.6806ZM8.31619 10.8275C8.29316 10.839 8.2712 10.8486 8.27913 10.8451C8.27962 10.8449 8.28481 10.8425 8.29116 10.8396C8.29784 10.8365 8.30789 10.8318 8.31994 10.8258C8.35917 10.8062 8.47112 10.7483 8.58353 10.6359L7.16931 9.22173C7.27959 9.11145 7.38888 9.05523 7.42546 9.03695C7.43685 9.03125 7.44623 9.02684 7.45226 9.02406C7.45532 9.02264 7.45784 9.0215 7.45949 9.02075C7.46106 9.02004 7.46227 9.0195 7.46235 9.01946C7.46902 9.01648 7.44586 9.02661 7.42177 9.03866L8.31619 10.8275ZM8.46451 10.7376C10.3817 9.34358 12.2959 7.94196 14.2078 6.54419L13.0274 4.92967C11.1139 6.32863 9.2028 7.72799 7.28833 9.12004L8.46451 10.7376ZM14.3247 5.02982L14.058 4.76311L12.6438 6.17733L12.9105 6.44404L14.3247 5.02982ZM14.058 4.76311C14.1361 4.84124 14.1361 4.96755 14.058 5.04567L12.6438 3.63146C11.9408 4.33438 11.9408 5.4744 12.6438 6.17733L14.058 4.76311ZM14.058 5.04567L14.1621 4.94154L12.7479 3.52733L12.6438 3.63146L14.058 5.04567ZM14.1609 4.94274C14.0856 5.01774 13.9603 5.02119 13.8795 4.94048L15.2938 3.52626C14.5904 2.82288 13.4513 2.82633 12.7491 3.52613L14.1609 4.94274ZM13.8795 4.9404L19.0585 10.1205L20.4729 8.70645L15.2938 3.52634L13.8795 4.9404ZM19.0586 10.1206C18.9805 10.0425 18.9805 9.91615 19.0586 9.83803L20.4728 11.2522C21.1757 10.5493 21.1757 9.4093 20.4728 8.70637L19.0586 10.1206Z" />
    </svg>
  )
);