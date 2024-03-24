import { ReactLenis, useLenis } from '@studio-freight/react-lenis'

export function LenisScroller({ children }) {
    const lenis = useLenis(({ scroll }) => {
        // called every scroll
    })

    return (
        <ReactLenis root options={{ lerp: 0.1 }}>
            {children}
        </ReactLenis>
    )
}