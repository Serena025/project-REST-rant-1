const React = require('react')
const Def = require('./default')

function home () {
    return (
        <Def>
            <main>
                <h1>HOME</h1>
                <div>
                <img src="/images/chia-fruit-drink.jpg" alt="Chia Fruit Shake" />
                </div>
                    <button className="btn-primary">Places Page</button>
                        <a href="/places">
                        </a>
            </main>
        </Def>
    )
}

module.exports = home



