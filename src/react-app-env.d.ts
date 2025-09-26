/// <reference types="react-scripts" />

declare global {
    namespace JSX {
        interface IntrinsicElements {
            div: React.DetailedHTMLProps<
                React.HTMLAttributes<HTMLDivElement>,
                HTMLDivElement
            >;
            span: React.DetailedHTMLProps<
                React.HTMLAttributes<HTMLSpanElement>,
                HTMLSpanElement
            >;
            button: React.DetailedHTMLProps<
                React.ButtonHTMLAttributes<HTMLButtonElement>,
                HTMLButtonElement
            >;
            header: React.DetailedHTMLProps<
                React.HTMLAttributes<HTMLElement>,
                HTMLElement
            >;
            h1: React.DetailedHTMLProps<
                React.HTMLAttributes<HTMLHeadingElement>,
                HTMLHeadingElement
            >;
            ul: React.DetailedHTMLProps<
                React.HTMLAttributes<HTMLUListElement>,
                HTMLUListElement
            >;
            li: React.DetailedHTMLProps<
                React.LiHTMLAttributes<HTMLLIElement>,
                HTMLLIElement
            >;
            img: React.DetailedHTMLProps<
                React.ImgHTMLAttributes<HTMLImageElement>,
                HTMLImageElement
            >;
            hr: React.DetailedHTMLProps<
                React.HTMLAttributes<HTMLHRElement>,
                HTMLHRElement
            >;
        }
    }
}
