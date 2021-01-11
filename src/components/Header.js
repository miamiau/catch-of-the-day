import React from 'react'

const Header = ({ tagline, age }) => (
    <header className="top">
        <h1>
            Catch
                <span className="ofThe">
                <span className="of">Of</span>
                <span className="the">The</span>
            </span>
                Day
            </h1>
        <h3>
            <span>{tagline}</span>
        </h3>
    </header>
)

// class Header extends React.Component {
//     render() {
//         return (
//             <header className="top">
//                 <h1>
//                     Catch
//                     <span className="ofThe">
//                         <span className="of">Of</span>
//                         <span className="the">The</span>
//                     </span>
//                     Day
//                 </h1>
//                 <h3>
//                     <span>{this.props.tagline}</span>
//                 </h3>
//             </header>
//         )
//     }
// }

export default Header