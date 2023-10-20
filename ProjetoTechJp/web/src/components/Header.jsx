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
                        <div className="Search">
                            Search
                        </div>
                    </div>
                </div>
                <div className="Painel-login">
                    <h3>Login | Register</h3>
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