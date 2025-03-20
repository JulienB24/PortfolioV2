import { ComponentPropsWithoutRef } from "react";

type SvgProps = ComponentPropsWithoutRef<"svg">;

const Icons = {
  dev: (props: SvgProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" {...props} viewBox="0 0 64 64" strokeWidth="3" stroke="currentColor" fill="none"><path d="M39.93,55.72A24.86,24.86,0,1,1,56.86,32.15a37.24,37.24,0,0,1-.73,6"/><path d="M37.86,51.1A47,47,0,0,1,32,56.7"/><path d="M32,7A34.14,34.14,0,0,1,43.57,30a34.07,34.07,0,0,1,.09,4.85"/><path d="M32,7A34.09,34.09,0,0,0,20.31,32.46c0,16.2,7.28,21,11.66,24.24"/><line x1="10.37" y1="19.9" x2="53.75" y2="19.9"/><line x1="32" y1="6.99" x2="32" y2="56.7"/><line x1="11.05" y1="45.48" x2="37.04" y2="45.48"/><line x1="7.14" y1="32.46" x2="56.86" y2="31.85"/><path d="M53.57,57,58,52.56l-8-8,4.55-2.91a.38.38,0,0,0-.12-.7L39.14,37.37a.39.39,0,0,0-.46.46L42,53.41a.39.39,0,0,0,.71.13L45.57,49Z"/></svg>
  ),
  tailwind: (props: SvgProps) => (
<svg fill="#000000"  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props} stroke="currentColor" ><path fillRule="evenodd" clipRule="evenodd" d="M12 6.036c-2.667 0-4.333 1.325-5 3.976 1-1.325 2.167-1.822 3.5-1.491.761.189 1.305.738 1.906 1.345C13.387 10.855 14.522 12 17 12c2.667 0 4.333-1.325 5-3.976-1 1.325-2.166 1.822-3.5 1.491-.761-.189-1.305-.738-1.907-1.345-.98-.99-2.114-2.134-4.593-2.134zM7 12c-2.667 0-4.333 1.325-5 3.976 1-1.326 2.167-1.822 3.5-1.491.761.189 1.305.738 1.907 1.345.98.989 2.115 2.134 4.594 2.134 2.667 0 4.333-1.325 5-3.976-1 1.325-2.167 1.822-3.5 1.491-.761-.189-1.305-.738-1.906-1.345C10.613 13.145 9.478 12 7 12z"/></svg>  ),
};


type IconName = keyof typeof Icons;

export type CustomIconProps = {
  name: IconName;
  size?: number
} & SvgProps;

export const CustomIcon = ({name, size, ...props}: CustomIconProps) => {
  const Icon = Icons[name]
  return <Icon height={size} width={size}{...props}/>;
}