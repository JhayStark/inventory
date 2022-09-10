
import './Logo.css';

function Logo({ asideIsShown }) {
    return (
        <div className="aside__logo">
            {/* Logo Icon */}
            <div className="logo-container__logo">
              <i class="fa-solid fa-bug"></i>
            </div>
            {/* Logo Text */}
            {asideIsShown && <p className="logo-container__text">Tracker</p>}
        </div>
    )
}

export default Logo;





{/* <div className="aside__logo">
<div className="logo-container">
    <div className="logo-container__logo">
        <i className="fa-solid fa-layer-group"></i>
    </div>
</div>
<div className="text-container">
    <p className="text-container__text">taskr</p>
</div>
</div> */}