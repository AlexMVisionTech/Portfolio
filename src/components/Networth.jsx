import { networth, profile } from '../data/profile'

export default function Networth() {
  return (
    <section className="networth" id="milestones">
      <div className="container">
        <div className="section-header reveal">
          <p>By The Numbers</p>
          <h2>Career Highlights</h2>
        </div>

        <div className="price-grid">
          {networth.map((item) => (
            <div className={`price-item ${item.featured ? 'featured-item' : ''}`} key={item.label}>
              <div className="price-header">
                <div className="price-title">
                  <h2>{item.label}</h2>
                </div>
                <div className="price-value">
                  {item.value}
                  <small>{item.suffix}</small>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="center-btn">
          <a className="btn reveal" href={profile.socials.linkedin} target="_blank" rel="noreferrer">
            Learn More
          </a>
        </div>
      </div>
    </section>
  )
}
