declare module "react-syntax-highlighter" {
  import { Component } from "react";
  interface SyntaxHighlighterProps {
    language?: string;
    style?: any;
    customStyle?: any;
    showLineNumbers?: boolean;
    lineNumberStyle?: any;
    lineProps?: any;
  }
  export class SyntaxHighlighter extends Component<SyntaxHighlighterProps> {}
  export const Prism: any;
}

declare module "react-syntax-highlighter/dist/cjs/styles/prism" {
  export const dracula: any;
}
