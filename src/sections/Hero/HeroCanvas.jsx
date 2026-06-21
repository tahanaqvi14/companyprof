import { useEffect, useRef } from "react";

export default function HeroCanvas() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        let W, H, pts = [], mouse = { x: -999, y: -999 };

        function resize() {
            W = canvas.width = canvas.clientWidth;
            H = canvas.height = canvas.clientHeight;

            pts = [];
            const cols = Math.max(4, Math.floor(W / 70));
            const rows = Math.max(3, Math.floor(H / 70));

            for (let r = 0; r <= rows; r++) {
                for (let c = 0; c <= cols; c++) {
                    pts.push({
                        ox: (c / cols) * W,
                        oy: (r / rows) * H,
                        x: (c / cols) * W,
                        y: (r / rows) * H,
                        vx: 0,
                        vy: 0,
                        r: Math.random() * 1.4 + 0.3,
                    });
                }
            }
        }

        function draw() {
            ctx.clearRect(0, 0, W, H);

            pts.forEach((p) => {
                const dx = mouse.x - p.x;
                const dy = mouse.y - p.y;
                const d = Math.sqrt(dx * dx + dy * dy);
                const f = Math.max(0, 1 - d / 160);

                p.vx += (-dx * f * 0.004) + (p.ox - p.x) * 0.06;
                p.vy += (-dy * f * 0.004) + (p.oy - p.y) * 0.06;

                p.vx *= 0.85;
                p.vy *= 0.85;

                p.x += p.vx;
                p.y += p.vy;

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(10,102,73,${0.07 + f * 0.5})`;
                ctx.fill();
            });

            requestAnimationFrame(draw);
        }

        resize();
        draw();

        window.addEventListener("resize", resize);

        canvas.addEventListener("mousemove", (e) => {
            const rect = canvas.getBoundingClientRect();
            mouse.x = e.clientX - rect.left;
            mouse.y = e.clientY - rect.top;
        });

        canvas.addEventListener("mouseleave", () => {
            mouse.x = -999;
            mouse.y = -999;
        });

        return () => {
            window.removeEventListener("resize", resize);
        };
    }, []);

    return <canvas ref={canvasRef} className="hero-canvas" />;
}