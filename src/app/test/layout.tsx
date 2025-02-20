
export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>)

{
    return(
        <div className="h-screen w-screen relative">

        <h1 className="absolute top-0">Header</h1>

        {children}
        <h1 className="absolute bottom-0">Footer</h1>

    </div>
    )
}

