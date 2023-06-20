import '@styles/global.css';

import Nav from "@components/Nav"
import Form from "@components/Form"
import Feed from "@components/Feed"
import Profile from "@components/Profile"
import Provider from "@components/Provider"
import PromptCard from "@components/PromptCard"

export const metadata = {
    title: "Promptopia",
    description: "Discover & Share AI Prompts its easy and simple just write the tag or name of our subject"
}

const RootLayout = ({ children }) => {
  return (
    <html lang='en'>
        <body>
            <div className='main'>
                <div className='gradient' />
            </div>

            <main className='app'>
                <Nav />
                {children}
            </main>
        </body>
    </html>
  )
}

export default RootLayout