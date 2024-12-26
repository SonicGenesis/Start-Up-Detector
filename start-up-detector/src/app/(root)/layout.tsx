import NavBar from "../components/NavBar";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html>
            <body>
                <main className="font-work-sans">
                    <NavBar />
                    {children}
                </main>
            </body>
        </html>
    )
}