let bebidas = [
    {
        id: 1,
        nome: 'Coca Cola',
        descricao: 'KS 290ml',
        quantidade: 12,
       foto:'https://adegabomretiro.com.br/wp-content/uploads/2019/10/10690_big-700x850-1.jpg'
    },
    {
        id: 2,
        nome: 'São Geraldo',
        descricao: 'garrafa 1L',
        quantidade: 10,
        foto:'https://cf.shopee.com.br/file/d52381b2fcb739db9603a286736db056'
    },
    {
        id: 3,
        nome: 'Guaraná Jesus',
        descricao: 'garrafa 2L',
        quantidade: 12,
        foto:'https://imgs.casasbahia.com.br/1512289188/1xg.jpg?imwidth=292'
    },
    {
        id: 4,
        nome: 'Fanta Uva',
        descricao: 'Lata 350ml',
        quantidade: 12,
        foto:'http://d3ugyf2ht6aenh.cloudfront.net/stores/001/133/427/products/untitled-design1-918bc6e51fc0bb38d516454864566000-640-0.png'
    },
    {
        id: 5,
        nome: 'Schweppes',
        descricao: 'Lata 350ml',
        quantidade: 10,
        foto:'https://s3.amazonaws.com/lepok.w/produtos/produtos/06064.jpg'
    },
    {
        id: 6,
        nome: 'Sprit',
        descricao: 'garrafa 1L',
        quantidade: 12,
        foto:'https://www.bernardaoemcasa.com.br/media/catalog/product/cache/1/image/500x500/9df78eab33525d08d6e5fb8d27136e95/w/h/whatsapp_image_2020-06-26_at_09.42.35_1_.jpeg'
    },
    {
        id: 7,
        nome: 'Fanta Laranja',
        descricao: 'garrafa 1L',
        quantidade: 10,
        foto:'https://hiperideal.vteximg.com.br/arquivos/ids/197335-1000-1000/1503391.jpg?v=637829500864000000'
    },
    {
        id: 8,
        nome: 'Suco Uva Integral',
        descricao: 'garrafa 1,5L',
        quantidade: 10,
        foto:'https://casabrasilvinhos.com.br/wp-content/uploads/2019/01/suco-aurora-15l.png'
    },
    {
        id: 9,
        nome: 'Grapette',
        descricao: 'garrafa 2L',
        quantidade: 12,
        foto:'https://supernossoio.vtexassets.com/arquivos/ids/222958/Refrigerante-Grapette-Uva-2L.jpg?v=637808144382670000'
    },
    {
        id: 10,
        nome: 'Soda Pink Lemonade',
        descricao: 'Lata 260ml',
        quantidade: 12,
        foto:'https://i.mctimg.com/cdn-cgi/image/w=400,h=400,fit=pad/https://i.mctimg.com/file/afbd86390f3b4f96b05b807980b4aa83685342b8/b3f76c7488375a7654959a84508831e356b6dcdbc6a22f4b941fd38523353688'
    },
]

function abrirModal(foto, nome) {
    modalFotoConteudo.innerHTML = `<img src="${foto}">`;
    modalTitulo.innerHTML = nome;
}

function atualizarTabela(lista){
    lista.map((cada) => {
        document.getElementById('tabela-dados').innerHTML += `
            <tr>
                <td>${cada.id}</td>
                <td>${cada.nome}</td>
                <td>${cada.descricao}</td>
                <td>${cada.quantidade}</td>
                <td>
                <a onclick="abrirModal('${cada.foto}', '${cada.nome}')" href="#" data-bs-toggle="modal" data-bs-target="#modalFoto">
                <img src="${cada.foto}" width="50px">
                </a>
                </td>
                <td>
                    <button class="btn btn-outline-warning btn-sm">Editar</button>
                    <button class="btn btn-outline-danger btn-sm">Excluir</button>
                </td>
            </tr>
        `;
    })
}

atualizarTabela(bebidas);

