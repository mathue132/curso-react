import React from "react";
import Navegacao from "../components/Navegacao";
import ProdutosExemplo from "../datas/ProdutoExemplo";

export default function Carrinho() {
    return<>
        <Navegacao titulo="VITRINE">
            <a href="/"> Início </a>
            <a href="/promocao"> Promoção </a>
            <a href="/carrinho"> Carrinho </a>
        </Navegacao>
    </>
}