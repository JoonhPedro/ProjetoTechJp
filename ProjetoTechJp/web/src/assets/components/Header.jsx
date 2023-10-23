import React from "react"

const Header = () => {

    return (
        <>
            <div className="header">
                <div className="Logo">
                    <h1>TechJp</h1>
                </div>

                <div className="Barra-Pesquisa">
                    <div className="Barra">
                        <input type="text"
                            name="search"
                            className="Barra-de-pesquisa"
                            maxLength={20}
                            placeholder="Procure por produtos"
                        />
                        <div className="all-categories">
                            <div className="linha"></div>

                            All Categories
                            <img src="./src/assets/image/seta.svg" alt="" />
                        </div>
                        <div className="Search">
                            Search
                        </div>
                    </div>
                </div>
                <div className="Painel-login">
                    <h3>Login</h3>
                    <h3>Register</h3>
                </div>

                <div className="carrinho">

                    <img src="./src/assets/image/carrinho.svg" />
                    <h3>Carrinho</h3>

                </div>
            </div>
        </>
    )
}

export default Header