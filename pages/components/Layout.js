import NavBar from './NavBar';

export default function Layout(props) {
    return (
        <div>
            <NavBar />
            <div className="container">
                {
                    props.children
                }
            </div>
        </div>
    )
}
