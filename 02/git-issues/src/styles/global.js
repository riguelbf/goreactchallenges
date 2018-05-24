import { injectGlobal } from 'styled-components';
import '../../node_modules/font-awesome/css/font-awesome.css';

injectGlobal`
    * {
        margin:0;
        padding:0;
        box-sizing:border-box;
    }

    body{
        background: #F5F5F5;
        text-rendering : optimizeLegebility !important;
        -webkit-font-smoothing: antiLiazed !important;
    }
`;
