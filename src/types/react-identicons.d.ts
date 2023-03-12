declare module "react-identicons" {
  interface IdenticonProps {
    size?: number;
    string?: string;
    hash?: string;
    palette?: string[];
    style?: React.CSSProperties;
    className?: string;
    fgColor?: string;
    bgColor?: string;
    square?: boolean;
    rounded?: boolean;
    hex?: boolean;
    margin?: number;
    svg?: boolean;
    svgProps?: React.SVGAttributes<SVGElement>;
    md5?: boolean;
  }

  export default function Identicon(props: IdenticonProps): JSX.Element;
}
