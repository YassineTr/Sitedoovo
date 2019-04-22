import { Component, OnInit } from '@angular/core';
import {IImage} from '../slideshow/IImage';
import {ProductLink} from '../models/productLink';
import { HostListener} from '@angular/core';
import {Produit} from '../models/produit';


@Component({
  selector: 'app-ovometro',
  templateUrl: './ovometro.component.html',
  styleUrls: ['./ovometro.component.scss']
})
export class OvometroComponent implements OnInit {

    weekEggs: number;
    weekEggsstr = '';
    public value;
    public quantite = null ;
    public choose = null ;
    public produits = null ;
    public prod = null;
    public primeiro = null;
    public seconda = null;
    public terc = null;
    public quar = null ;
    public deliveryOptions = [];
    public deliveryOptionSelected = {};
    public deliveryOptionsSelectedTitle;
    public frequencia ;
    public entrega ;
    public eggcCaipiraPrice;
    public eggWhitePrice;
    public eggRedPrice;
    public cordonaPrice;
    public entregas  = null;
    public entregas2  = null;
    public eggDeliveryVisible = true;
    public eggPlaneVisible = true;
    public showdate = false ;
    public isCollapsed = false;
    public productslink: ProductLink;
    public productslink2: ProductLink;
    public productslink3: ProductLink;
    public allproducts = [];
    public whiteURL = 'https://salvador.sitedoovo.com.br/produto/plano-ovo-branco-mensal-1-entrega-c-30-ovos/';
    public redURL = 'https://salvador.sitedoovo.com.br/produto/plano-ovo-vermelho-mensal-1-entrega-c-30-ovos/';
    public caipiraURL = 'https://salvador.sitedoovo.com.br/produto/plano-ovo-caipira-mensal-1-entrega-c-30-ovos-2/';
    public CordonaURL = 'https://sitedoovo.com.br/produto/plano-ovo-de-codorna-1-entrega-c-60-ovos/';



    public primeiro30 = null;
    public primeiro60 = null;
    public seconda30 = null ;
    public seconda60 = null ;
    public terceiro30 = null ;
    public terceiro60 = null ;
    public quarto30  = null ;
    public quarto60  = null;
    public maxChoose = 0 ;
    imageUrls: (string | IImage)[] = [
        { url: '../../assets/img/leslide1.png', caption: '' },
        { url: '../../assets/img/leslide2.png', clickAction: () => alert('custom click function') },
        { url: '../../assets/img/leslide3.png' },

    ];
    height = '300px';
    minHeight: string;
    arrowSize = '30px';
    showArrows = true;
    disableSwiping = false;
    autoPlay = true;
    autoPlayInterval = 3333;
    stopAutoPlayOnSlide = true;
    debug = false;
    backgroundSize = 'cover';
    backgroundPosition = 'center center';
    backgroundRepeat = 'no-repeat';
    showDots = true;
    dotColor = '#FFF';
    showCaptions = true;
    captionColor = '#FFF';
    captionBackground = 'rgba(0, 0, 0, .35)';
    lazyLoad = false;
    hideOnNoSlides = false;
    width = '100%';
    favoriteSeason: string;
    lieu_date: string;
    fullscreen = false;
    resume = false ;
    constructor() {}
    showDate() {
        if (this.favoriteSeason != null) {
            this.showdate = true;
        } else {
            this.showdate = false;
        }
    }
    entregaChange() {
        console.log('freq : ' + this.entrega);
        if ( this.entrega === '2 Entregas' ) {
            this.primeiro30 = true;
            this.primeiro60 = true;
            this.seconda30 = true;
            this.seconda60 = true;
        } else if ( this.entrega === '1 Entregas' ) {
            this.primeiro30 = true;
        } else if ( this.entrega === '3 Entregas' ) {
            this.primeiro30 = true;
            this.primeiro60 = true;
            this.seconda30 = true;
            this.seconda60 = true;
            this.terceiro30 = true ;
            this.terceiro60 = true ;
        } else if ( this.entrega === '4 Entregas' ) {
            this.primeiro30 = true;
            this.primeiro60 = true;
            this.seconda30 = true;
            this.seconda60 = true;
            this.terceiro30 = true ;
            this.terceiro60 = true ;
            this.quarto30 = true ;
            this.quarto60 = true ;
        }

    }
    frequenciaChange() {
        console.log('freq : ' + this.frequencia);
        this.entrega = this.frequencia;
    }
    showQuantite() {
        if (this.frequencia !== null && this.frequencia === 'quienzenal') {
            this.quantite = 'true';
            this.entregas = '2 Entregas' ;
            this.entrega = this.entregas;
            this.entregas2 = null;
            console.log('frequencia : ' + this.frequencia);
        } else if (this.frequencia !== null && this.frequencia === 'semanal') {
            this.quantite = 'true';
            this.entregas = '3 Entregas' ;
            this.entregas2 = '4 Entregas' ;
            console.log('frequencia : ' + this.frequencia);
        } else if (this.frequencia !== null && this.frequencia === 'mensal') {
            this.quantite = 'true';
            this.entregas = '1 Entregas' ;
            this.entregas2 = null ;
            this.entrega = this.entregas;
            console.log('frequencia : ' + this.frequencia);
        } else {
            console.log('frequencia : ' + this.frequencia);
        }
    }
    showChoose() {
        this.choose = 'true';
    }

    showProduits() {
        this.produits = 'true';
        if ( this.entrega === '2 Entregas' ) {
                this.primeiro30 = true;
                this.primeiro60 = true;
                this.seconda30 = true;
                this.seconda60 = true;
                this.terceiro30 = null ;
                this.terceiro60 = null ;
                this.quarto30 = null ;
                this.quarto60 = null ;
        } else if ( this.entrega === '1 Entregas' ) {
            this.primeiro30 = true;
            if ( (this.weekEggs * 4) > 45  ) {
                this.primeiro60 = true;
            } else {
                this.primeiro60 = null;
            }
            this.seconda30 = null;
            this.seconda60 = null;
            this.terceiro30 = null ;
            this.terceiro60 = null ;
            this.quarto30 = null ;
            this.quarto60 = null ;
        } else if ( this.entrega === '3 Entregas' ) {
            this.primeiro30 = true;
            this.primeiro60 = true;
            this.seconda30 = true;
            this.seconda60 = true;
            this.terceiro30 = true ;
            this.terceiro60 = true ;
            this.quarto30 = null ;
            this.quarto60 = null ;
        } else if ( this.entrega === '4 Entregas' ) {
            this.primeiro30 = true;
            this.primeiro60 = true;
            this.seconda30 = true;
            this.seconda60 = true;
            this.terceiro30 = true ;
            this.terceiro60 = true ;
            this.quarto30 = true ;
            this.quarto60 = true ;
        }
    }
    calcule() {
        this.weekEggs = this.weekEggs * 4;
        console.log(this.weekEggs);
        if (this.weekEggs > 0 && this.weekEggs < 30 ) {
            this.value = 30;
        } else {
            this.value = 3;
        }
    }

    showresume() {
        if (this.entrega != null && this.quantite != null && this.lieu_date != null && this.weekEggs !== 0 && this.frequencia != null) {
        this.resume = true ;
        } else {
            this.resume = false ;
        }
    }
    ngOnInit() {
    }

    selectedWeekEggs() {

        if (this.weekEggs != null && this.weekEggs > 0) {
            this.deliveryOptions = [];
            this.eggWhitePrice = '';
            this.eggRedPrice = '';
            this.eggcCaipiraPrice = '';
            this.cordonaPrice = '';

            const eggResult = this.weekEggs * 4;
            console.log('eggResult : ' + eggResult);
            this.allproducts = [];
            if (eggResult < 40) {
                this.quantite = 30 ;
                this.deliveryOptionsSelectedTitle = '30 Ovos(1 Placa), Escolha como quer receber: ';
                this.deliveryOptions.push({ label: '1 Entrega no mês', value: 1 });
                this.deliveryOptions.push({ label: '2 Entregas no mês', value: 1 });
                this.deliveryOptions.push({ label: '4 Entregas no mês', value: 1 });
                this.eggWhitePrice = '15,99';
                this.eggRedPrice = '18,99';
                this.eggcCaipiraPrice = '35,99';
                this.cordonaPrice = '11,99';

                this.whiteURL = 'https://salvador.sitedoovo.com.br/produto/plano-ovo-branco-mensal-1-entrega-c-30-ovos/';
                this.redURL = 'https://salvador.sitedoovo.com.br/produto/plano-ovo-vermelho-mensal-1-entrega-c-30-ovos/';
                this.caipiraURL = 'https://salvador.sitedoovo.com.br/produto/plano-ovo-caipira-mensal-1-entrega-c-30-ovos-2/';
                this.CordonaURL = 'https://sitedoovo.com.br/produto/plano-ovo-de-codorna-1-entrega-c-60-ovos/';
                this.productslink = new ProductLink();
                this.productslink2 = new ProductLink();
                this.productslink3 = new ProductLink();
                this.productslink.name = 'Ovos Brancos' ;
                this.productslink.link = 'https://sitedoovo.app.vindi.com.br/customer/pages/2c86b225-cbce-4599-ac7f-6ce024db3fb4/subscriptions/new';
                this.productslink.price = this.eggWhitePrice;
                this.productslink.image = '../../assets/Ovobranco1.png';
                this.allproducts.push(this.productslink) ;
                this.productslink2.name = 'Ovos Vermelhos' ;
                this.productslink2.link = 'https://sitedoovo.app.vindi.com.br/customer/pages/2b6a5122-18d7-477f-b341-c8e817591c2c/subscriptions/new';
                this.productslink2.price = this.eggRedPrice;
                this.productslink2.image = '../../assets/Ovovermelho1.png';
                this.allproducts.push(this.productslink2) ;
                this.productslink3.name = 'Ovos Caipiras' ;
                this.productslink3.link = 'https://sitedoovo.app.vindi.com.br/customer/pages/972eaf5a-8ff0-4233-bcce-9c57f880e5d2/subscriptions/new';
                this.productslink3.price = this.eggcCaipiraPrice;
                this.productslink3.image = '../../assets/Ovocaipira1.png';
                this.allproducts.push(this.productslink3) ;
            }
            if (eggResult >= 40 && eggResult < 70) {
                this.deliveryOptionsSelectedTitle = '60 Ovos(2 Placas), Escolha como quer receber: ';
                this.deliveryOptions.push({ label: '1 Entrega no mês', value: 1 })
                this.deliveryOptions.push({ label: '2 Entregas - Quinzenal', value: 2 })
                this.quantite = 60 ;
                this.eggWhitePrice = '27,99';
                this.eggRedPrice = '33,99';
                this.eggcCaipiraPrice = '69,99';
                this.cordonaPrice = '23,99';

                this.productslink = new ProductLink();
                this.productslink2 = new ProductLink();
                this.productslink3 = new ProductLink();
                this.productslink.name = 'Ovos Brancos' ;
                this.productslink.link = 'https://sitedoovo.app.vindi.com.br/customer/pages/4875d968-3890-4eb9-ba6d-801e9baca800/subscriptions/new';
                this.productslink.price = this.eggWhitePrice;
                this.productslink.image = '../../assets/Ovobranco1.png';
                this.allproducts.push(this.productslink) ;
                this.productslink2.name = 'Ovos Vermelhos' ;
                this.productslink2.link = 'https://sitedoovo.app.vindi.com.br/customer/pages/47913de6-c05d-4326-b2d7-cebaf8eb3e61/subscriptions/new';
                this.productslink2.price = this.eggRedPrice;
                this.productslink2.image = '../../assets/Ovovermelho1.png';
                this.allproducts.push(this.productslink2) ;
                this.productslink3.name = 'Ovos Caipiras' ;
                this.productslink3.link = 'https://sitedoovo.app.vindi.com.br/customer/pages/64ab7066-d812-4c80-8550-81b67e41b996/subscriptions/new';
                this.productslink3.price = this.eggcCaipiraPrice;
                this.productslink3.image = '../../assets/Ovocaipira1.png';
                this.allproducts.push(this.productslink3) ;

            }
            if (eggResult >= 70 && eggResult < 110) {
                this.deliveryOptionsSelectedTitle = '90 Ovos(3 Placas), Escolha como quer receber: ';
                this.deliveryOptions.push({ label: '1 Entrega no mês', value: 1 });
                this.deliveryOptions.push({ label: '2 Entregas - Quinzenal', value: 2 });

                this.quantite = 90 ;
                this.eggWhitePrice = '41,99';
                this.eggRedPrice = '50,99';
                this.eggcCaipiraPrice = '104,99';
                this.cordonaPrice = '37,99';

                this.productslink = new ProductLink();
                this.productslink2 = new ProductLink();
                this.productslink3 = new ProductLink();
                this.productslink.name = 'Ovos Brancos' ;
                this.productslink.link = 'https://sitedoovo.app.vindi.com.br/customer/pages/b07950d1-8a4d-492d-a82a-ff1b5877a672/subscriptions/new';
                this.productslink.price = this.eggWhitePrice;
                this.productslink.image = '../../assets/Ovobranco1.png';
                this.allproducts.push(this.productslink) ;
                this.productslink2.name = 'Ovos Vermelhos' ;
                this.productslink2.link = 'https://sitedoovo.app.vindi.com.br/customer/pages/72cbd1e5-cffb-4912-972b-25ec7f358dcf/subscriptions/new';
                this.productslink2.price = this.eggRedPrice;
                this.productslink2.image = '../../assets/Ovovermelho1.png';
                this.allproducts.push(this.productslink2) ;
                this.productslink3.name = 'Ovos Caipiras' ;
                this.productslink3.link = 'https://sitedoovo.app.vindi.com.br/customer/pages/930b216a-cd62-4156-b217-05e636b386d9/subscriptions/new';
                this.productslink3.price = this.eggcCaipiraPrice;
                this.productslink3.image = '../../assets/Ovocaipira1.png';
                this.allproducts.push(this.productslink3) ;
            }
            if (eggResult >= 110 ) {
                this.deliveryOptionsSelectedTitle = '120 Ovos(4 Placas), Escolha como quer receber: ';
                this.deliveryOptions.push({ label: '4 Entregas, 1 Placa por semana!', value: 1 });
                this.deliveryOptions.push({ label: '2 Entregas, 2 Placas por quinzena!', value: 2 });
                this.deliveryOptions.push({ label: '2 Entregas, Escolha personalizada!', value: 1 });
                this.quantite = 120 ;
                this.eggWhitePrice = '55,99';
                this.eggRedPrice = '67,99';
                this.eggcCaipiraPrice = '139,99';
                this.cordonaPrice = '23,99';

                this.productslink = new ProductLink();
                this.productslink2 = new ProductLink();
                this.productslink3 = new ProductLink();
                this.productslink.name = 'Ovos Brancos';
                this.productslink.link = 'https://sitedoovo.app.vindi.com.br/customer/pages/93c68996-629f-43fa-a5ab-a2265ae99e74/subscriptions/new';
                this.productslink.price = this.eggWhitePrice;
                this.productslink.image = '../../assets/Ovobranco1.png';
                this.allproducts.push(this.productslink) ;
                this.productslink2.name = 'Ovos Vermelhos' ;
                this.productslink2.link = 'https://sitedoovo.app.vindi.com.br/customer/pages/7279bd25-3388-49cc-8787-e7c4726fe730/subscriptions/new';
                this.productslink2.price = this.eggRedPrice;
                this.productslink2.image = '../../assets/Ovovermelho1.png';
                this.allproducts.push(this.productslink2) ;
                this.productslink3.name = 'Ovos Caipiras' ;
                this.productslink3.link = 'https://sitedoovo.app.vindi.com.br/customer/pages/a3be656a-7595-4944-bd2f-71bc9d4cda37/subscriptions/new';
                this.productslink3.price = this.eggcCaipiraPrice;
                this.productslink3.image = '../../assets/Ovocaipira1.png';
                this.allproducts.push(this.productslink3) ;
            }

            /*if (eggResult >= 130 && eggResult < 170 )   {
                this.deliveryOptionsSelectedTitle = '150 Ovos(5 Placas), Escolha como quer receber: ';
                this.deliveryOptions.push({ label: '5 Entregas, 1 Placa por semana!', value: 1 })
                this.deliveryOptions.push({ label: '2 Entregas, 3 Placas por quinzena!', value: 2 })


                this.eggWhitePrice = '69,99'
                this.eggRedPrice = '84,99'
                this.eggcCaipiraPrice = '139,99'
                this.cordonaPrice = ''


            }
            if (eggResult >= 170 && eggResult < 200 )   {
                this.deliveryOptionsSelectedTitle = '180 Ovos(6 Placas), Escolha como quer receber: ';
                this.deliveryOptions.push({ label: '6 Entregas, 1 Placa por semana!', value: 1 })
                this.deliveryOptions.push({ label: '3 Entregas, 3 Placas por quinzena!', value: 2 })


                this.eggWhitePrice = '83,99'
                this.eggRedPrice = '101,99'
                this.eggcCaipiraPrice = '209,99'
                this.cordonaPrice = ''


            }
            if (eggResult >= 200 && eggResult < 230 )   {
                this.deliveryOptionsSelectedTitle = '210 Ovos(7 Placas), Escolha como quer receber: ';
                this.deliveryOptions.push({ label: '7 Entregas, 1 Placa por semana!', value: 1 })
                this.deliveryOptions.push({ label: '4 Entregas, 3 Placas por quinzena!', value: 2 })


                this.eggWhitePrice = '94,99'
                this.eggRedPrice = '118,99'
                this.eggcCaipiraPrice = '244,99'
                this.cordonaPrice = ''


            }
            if (eggResult >= 230 && eggResult < 260 )   {
                this.deliveryOptionsSelectedTitle = '240 Ovos(8 Placas), Escolha como quer receber: ';
                this.deliveryOptions.push({ label: '8 Entregas, 1 Placa por semana!', value: 1 })
                this.deliveryOptions.push({ label: '4 Entregas, 4 Placas por quinzena!', value: 2 })

                this.eggWhitePrice = '120,99'
                this.eggRedPrice = '152,99'
                this.eggcCaipiraPrice = '305,99'
                this.cordonaPrice = ''


            }
            if (eggResult >= 260 && eggResult < 310 )   {
                this.deliveryOptionsSelectedTitle = '270 Ovos(9 Placas), Escolha como quer receber:  ';
                this.deliveryOptions.push({ label: '9 Entregas, 1 Placa por semana!', value: 1 })
                this.deliveryOptions.push({ label: '5 Entregas, 4 Placas por quinzena!', value: 2 })


                this.eggWhitePrice = '134,99'
                this.eggRedPrice = '169,99'
                this.eggcCaipiraPrice = '339,99'
                this.cordonaPrice = ''


            }
            if (eggResult >= 310 && eggResult < 330 )   {
                this.deliveryOptionsSelectedTitle = '330 Ovos(11 Placas), Escolha como quer receber: ';
                this.deliveryOptions.push({ label: '11 Entregas, 1 Placa por semana!', value: 1 })
                this.deliveryOptions.push({ label: '5 Entregas, 6 Placas por quinzena!', value: 2 })


                this.eggWhitePrice = '143,99';
                this.eggRedPrice = '186,99';
                this.eggcCaipiraPrice = '373,99';
                this.cordonaPrice = '';


            }
            if (eggResult >= 330 && eggResult < 360 )   {
                this.deliveryOptionsSelectedTitle = '360 Ovos(12 Placas), Escolha como quer receber: ';
                this.deliveryOptions.push({ label: '12 Entregas, 1 Placa por semana!', value: 1 });
                this.deliveryOptions.push({ label: '6 Entregas, 6 Placas por quinzena!', value: 2 });


                this.eggWhitePrice = '156,99';
                this.eggRedPrice = '203,99';
                this.eggcCaipiraPrice = '407,99';
                this.cordonaPrice = ''


            }
            if (eggResult > 360) {
                alert('Nossa, Eggxcelente! devito ao seu alto consulto, entraremos em contato para um plano personalizado para você!');
            }*/

            this.eggDeliveryVisible = false;

        }  else {
            alert('Favor preencher o campo de quantidade semanal!')
        }
    }

    selectedDelivery() {
        const teste = 0;
    }

}
