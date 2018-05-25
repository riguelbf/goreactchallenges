import { injectGlobal } from 'styled-components';
import '../../node_modules/font-awesome/css/font-awesome.css';

injectGlobal`
    * {
        margin:0;
        padding:0;
        box-sizing:border-box;
        outline: none;
    }

    body{
        background: #ddd;
        text-rendering : optimizeLegebility !important;
        -webkit-font-smoothing: antiLiazed !important;
    }
`;
