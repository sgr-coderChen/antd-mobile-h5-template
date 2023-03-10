declare module '*.css';
declare module '*.less';
declare module '*.png';
declare module '*.svg' {
  export function ReactComponent(props: React.SVGProps<SVGSVGElement>): React.ReactElement;
  const url: string;
  export default url;
}

declare const BASE_URL: string;
declare const __PRO__: boolean;
declare module 'postcss-px-to-viewport';
