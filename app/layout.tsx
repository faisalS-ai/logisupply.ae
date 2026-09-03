import "./globals.css";
import type { Metadata } from "next";
export const metadata: Metadata={title:"LogiSupply.ae",description:"Everything logistics. One smart supply."};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
