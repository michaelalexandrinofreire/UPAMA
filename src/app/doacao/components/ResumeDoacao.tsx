import style from '../style/globals.module.css'
import { useState } from 'react'

interface resumeProps {
    valorTotal: string;
}

export default function ResumeDoacao({ valorTotal }: resumeProps){

    return(
        <div className={style.resumeContainer}>
            <h2>Resumo da doação</h2>
            <svg width="98" height="25" viewBox="0 0 98 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_3_200)">
            <path d="M23.9252 7.79598C21.2962 1.44561 14.0158 -1.57271 7.67479 1.0552C1.33378 3.68312 -1.67848 10.9606 0.951556 17.312C3.58159 23.6633 10.861 26.6796 17.201 24.0517C23.541 21.4238 26.5563 14.1464 23.9252 7.79598Z" fill="black"/>
            <path d="M16.9057 1.77548C10.958 -0.687998 4.13672 2.14168 1.67049 8.09559C-0.795742 14.0495 2.02743 20.872 7.97408 23.3345C13.9207 25.7969 20.7421 22.9693 23.2083 17.0154C25.6745 11.0615 22.8524 4.23695 16.9057 1.77548Z" fill="black"/>
            <path d="M22.7755 10.8667C22.7755 5.14486 18.1484 0.515488 12.4373 0.515488C6.72628 0.515488 2.10425 5.14486 2.10425 10.8667C2.10425 16.5886 6.73134 21.218 12.4373 21.218C18.1433 21.218 22.7755 16.5836 22.7755 10.8667Z" fill="#DDE460"/>
            <path d="M12.4373 21.4874C6.51189 21.4874 1.70886 16.6805 1.70886 10.7447C1.70886 4.80893 6.51189 0 12.4373 0C18.3627 0 23.1668 4.81095 23.1668 10.7447C23.1668 16.6784 18.3637 21.4874 12.4373 21.4874ZM12.4373 0.794932C10.4581 0.786145 8.52082 1.3639 6.87114 2.45495C5.22147 3.546 3.93368 5.1012 3.17108 6.92335C2.40848 8.74551 2.2054 10.7525 2.5876 12.69C2.96979 14.6274 3.92005 16.408 5.31789 17.806C6.71572 19.2039 8.49816 20.1563 10.4392 20.5423C12.3803 20.9284 14.3925 20.7306 16.2208 19.9743C18.0491 19.2179 19.6111 17.9369 20.7087 16.2938C21.8063 14.6506 22.3901 12.7193 22.3862 10.7447C22.3831 5.24574 17.931 0.783835 12.4373 0.777782V0.794932Z" fill="black"/>
            <path d="M19.2879 15.6071C19.2879 10.8657 15.4455 7.01416 10.7072 7.01416C5.96887 7.01416 2.12341 10.8617 2.12341 15.6071C2.12341 20.3525 5.96584 24.199 10.7031 24.199C15.4404 24.199 19.2839 20.3515 19.2839 15.6071H19.2879Z" fill="#A7DCDA"/>
            <path d="M10.7255 24.5904C10.0874 24.5905 9.45122 24.5229 8.82752 24.3887C3.98506 23.3516 0.901008 18.577 1.93947 13.7267C2.18327 12.5755 2.65226 11.4836 3.31961 10.5135C3.98696 9.54336 4.83956 8.71409 5.82859 8.07315C6.81761 7.43221 7.92364 6.99219 9.08335 6.77827C10.2431 6.56436 11.4337 6.58076 12.587 6.82653C17.4315 7.86559 20.5156 12.6392 19.4801 17.4895C19.0544 19.491 17.955 21.2869 16.3646 22.5787C14.7741 23.8705 12.7885 24.5804 10.7376 24.5904H10.7255ZM10.7053 7.40255C8.84018 7.39723 7.02875 8.02494 5.56857 9.18257C4.10838 10.3402 3.08628 11.9589 2.67017 13.7727C2.25407 15.5865 2.46871 17.4876 3.27884 19.1636C4.08897 20.8396 5.4464 22.1909 7.12813 22.9954C8.80985 23.8 10.7159 24.0099 12.533 23.5908C14.3502 23.1717 15.9704 22.1484 17.1275 20.6891C18.2846 19.2298 18.9098 17.4212 18.9004 15.5605C18.891 13.6998 18.2475 11.8977 17.0756 10.4501C16.3083 9.50086 15.3382 8.7346 14.236 8.20733C13.1339 7.68006 11.9276 7.4051 10.7053 7.40255Z" fill="black"/>
            <path d="M23.5248 15.9682C23.5206 14.9189 23.2049 13.8944 22.6175 13.0239C22.0301 12.1534 21.1974 11.4761 20.2245 11.0774C19.2516 10.6787 18.1821 10.5765 17.151 10.7837C16.1199 10.9909 15.1735 11.4982 14.4311 12.2416C13.6888 12.985 13.1839 13.9311 12.9801 14.9606C12.7764 15.99 12.8828 17.0566 13.2862 18.0258C13.6895 18.9949 14.3716 19.8231 15.2463 20.4057C16.121 20.9884 17.1492 21.2995 18.201 21.2997C18.9014 21.2985 19.5948 21.1597 20.2414 20.8911C20.8881 20.6224 21.4753 20.2294 21.9696 19.7342C22.4639 19.2391 22.8556 18.6517 23.1222 18.0055C23.3889 17.3593 23.5254 16.6671 23.5238 15.9682H23.5248Z" fill="#F6DF3F"/>
            <path d="M18.2009 21.6891C17.0658 21.6935 15.955 21.3617 15.009 20.7358C14.0631 20.1099 13.3247 19.2179 12.8872 18.173C12.4498 17.128 12.3331 15.977 12.5518 14.8658C12.7706 13.7546 13.3149 12.7332 14.116 11.9309C14.9171 11.1286 15.9388 10.5815 17.0517 10.359C18.1647 10.1364 19.3188 10.2484 20.3679 10.6808C21.417 11.1131 22.3139 11.8463 22.945 12.7876C23.5761 13.7289 23.913 14.8358 23.913 15.9682C23.9144 16.7181 23.7678 17.4608 23.4816 18.1541C23.1953 18.8474 22.775 19.4777 22.2445 20.0089C21.7141 20.5402 21.084 20.962 20.3902 21.2503C19.6964 21.5386 18.9525 21.6877 18.2009 21.6891ZM18.2009 11.0282C17.2201 11.024 16.26 11.3103 15.4424 11.8509C14.6249 12.3915 13.9865 13.1621 13.6082 14.0649C13.23 14.9678 13.1288 15.9623 13.3176 16.9226C13.5064 17.8828 13.9766 18.7656 14.6686 19.459C15.3607 20.1524 16.2435 20.6253 17.2052 20.8178C18.1669 21.0102 19.1642 20.9136 20.0708 20.5401C20.9774 20.1666 21.7525 19.533 22.2978 18.7197C22.8432 17.9064 23.1344 16.9498 23.1344 15.9713C23.137 15.3232 23.0114 14.6809 22.7647 14.0814C22.5179 13.4818 22.155 12.9368 21.6966 12.4775C21.2382 12.0183 20.6935 11.6538 20.0936 11.4051C19.4937 11.1564 18.8505 11.0283 18.2009 11.0282ZM33.7627 13.1466H31.884L31.1205 16.7662H28.9738L31.0609 6.98895H35.1055C36.7507 6.98895 37.8741 8.13898 37.8741 9.46555C37.8711 12.0874 35.777 13.1436 33.7637 13.1436L33.7627 13.1466ZM34.0276 8.42548H32.883L32.1752 11.7121H32.9093C34.3492 11.7121 35.6809 11.3863 35.6809 9.67134C35.6839 8.89053 34.8659 8.42245 34.0286 8.42245L34.0276 8.42548ZM44.7126 14.1534C44.5118 15.0101 44.3937 15.884 44.3597 16.7632H42.2868C42.3172 16.398 42.4506 15.707 42.5679 15.0351C42.0381 15.9864 41.1756 16.9256 39.7316 16.9256C38.2472 16.9256 37.4969 15.9329 37.4969 14.5801C37.4969 11.2804 40.4516 9.24159 43.2666 9.24159C44.1191 9.24159 45.2222 9.38888 45.7349 9.57954L44.7126 14.1534ZM42.8733 10.6055C41.1826 10.6055 39.6376 12.3911 39.6376 14.3602C39.6376 15.019 39.8722 15.5627 40.6326 15.5627C41.6609 15.5627 42.6448 14.1504 43.0594 12.387L43.4567 10.6862C43.2683 10.6247 43.0704 10.5973 42.8723 10.6055H42.8733ZM52.5805 15.7806C51.9202 18.7434 50.8312 20.0912 47.5702 20.0912C46.7014 20.0923 45.838 19.9561 45.0119 19.6877L45.4012 18.229C46.0535 18.5704 46.781 18.7438 47.5176 18.7334C49.3539 18.7334 50.0596 17.7659 50.3984 16.3869L50.633 15.4205C49.9252 16.3597 49.1931 16.7682 47.9736 16.7682C46.4569 16.7682 45.7238 15.8311 45.7238 14.5852C45.7238 11.2713 48.7512 9.26278 51.5744 9.26278C52.3814 9.26565 53.1846 9.37349 53.9637 9.58358L52.5805 15.7806ZM51.1406 10.6216C49.4499 10.6216 47.8776 12.3517 47.8776 14.4036C47.8776 15.0624 48.1121 15.5466 48.8331 15.5466C50.2154 15.5466 50.9788 13.7882 51.2872 12.4829L51.7129 10.7165C51.5279 10.6568 51.335 10.6248 51.1406 10.6216ZM61.2027 8.77654C60.571 8.46582 59.8775 8.30035 59.1733 8.29232C58.2784 8.29232 56.9396 8.7029 56.9396 9.71472C56.9396 11.1361 60.8204 10.9182 60.8204 13.6147C60.8204 15.7564 58.791 16.9286 56.3086 16.9286C55.336 16.9457 54.3673 16.8015 53.442 16.5019L53.9577 14.9151C54.703 15.297 55.5327 15.4854 56.3703 15.4628C57.4148 15.4487 58.5747 14.9786 58.5747 13.8921C58.5747 12.3547 54.7262 12.5151 54.7262 10.0365C54.7262 7.70721 57.0609 6.84167 59.3007 6.84167C60.1243 6.84054 60.9412 6.98925 61.7113 7.28049L61.2027 8.77654ZM63.5284 13.6581C63.458 13.8809 63.4238 14.1135 63.4272 14.3471C63.4272 15.3398 64.1907 15.7362 65.0876 15.7362C65.8893 15.7224 66.6718 15.4889 67.3495 15.0613L67.2777 16.3677C66.3975 16.7689 65.4371 16.9642 64.4697 16.9387C62.8681 16.9387 61.3543 16.2487 61.3543 14.446C61.3543 11.5275 63.5789 9.27085 66.1897 9.27085C67.3829 9.27085 68.7318 9.69555 68.7318 11.0443C68.7399 13.3514 65.3737 13.6581 63.5304 13.6581H63.5284ZM66.0108 10.4481C64.8985 10.4481 64.0895 11.6062 63.7195 12.5585C65.0421 12.5585 66.8925 12.3245 66.8925 11.1694C66.9097 10.6247 66.5123 10.4471 66.0189 10.4471L66.0108 10.4481ZM75.5157 15.7836C74.8544 18.7465 73.7684 20.0942 70.5034 20.0942C69.6353 20.0952 68.7725 19.959 67.9471 19.6907L68.3455 18.237C68.9978 18.5786 69.7253 18.752 70.4619 18.7414C72.2992 18.7414 73.004 17.774 73.3417 16.395L73.5783 15.4285C72.8705 16.3677 72.1384 16.7763 70.9169 16.7763C69.4002 16.7763 68.6701 15.8391 68.6701 14.5933C68.6701 11.2794 71.6965 9.27085 74.5177 9.27085C75.3237 9.27134 76.1262 9.37647 76.905 9.58358L75.5157 15.7836ZM74.0758 10.6247C72.3851 10.6247 70.8138 12.3547 70.8138 14.4066C70.8138 15.0654 71.0484 15.5496 71.7683 15.5496C73.1496 15.5496 73.913 13.7913 74.2234 12.4859L74.6491 10.7195C74.4635 10.6593 74.2699 10.6274 74.0748 10.6247H74.0758ZM83.6576 15.1108C83.536 15.6575 83.4425 16.21 83.3775 16.7662H81.4816L81.6838 15.4487C81.0518 16.3122 80.2682 16.9286 79.0548 16.9286C77.8414 16.9286 77.0324 16.3334 77.0324 15.1128C77.0279 14.8319 77.0523 14.5514 77.1052 14.2755L78.1478 9.39392H80.1772L79.256 13.8326C79.1902 14.082 79.1509 14.3377 79.1387 14.5953C79.1387 15.1531 79.4036 15.5637 80.1094 15.5637C81.2116 15.5637 81.7273 14.5549 81.9295 13.6127L82.8396 9.38989H84.8619L83.6576 15.1108ZM90.2858 11.1654C90.0946 11.0962 89.8925 11.0621 89.6892 11.0645C88.3504 11.0645 87.6021 12.3568 87.3514 13.53L86.6618 16.7682H84.6172L85.8306 11.0504C85.9568 10.5133 86.0553 9.97024 86.1258 9.42318H88.0349L87.7569 10.9364C88.2119 10.0285 89.1098 9.24966 90.1675 9.24966C90.3655 9.24484 90.5632 9.26966 90.7539 9.32331L90.2858 11.1654ZM93.2535 16.9286C91.6225 16.9286 90.1189 16.0338 90.1189 14.2593C90.1189 11.4156 91.9562 9.26076 94.8805 9.26076C96.5115 9.26076 97.9959 10.1263 97.9959 11.9139C97.9959 14.7284 96.1293 16.9286 93.2495 16.9286H93.2535ZM94.5327 10.6247C93.0159 10.6247 92.2555 12.7633 92.2555 14.0394C92.2555 14.9191 92.5933 15.5657 93.5478 15.5657C95.0322 15.5657 95.8856 13.4109 95.8856 12.1479C95.8856 11.2662 95.4872 10.6216 94.5327 10.6216V10.6247Z" fill="black"/>
            </g>
            <defs>
            <clipPath id="clip0_3_200">
            <rect width="98" height="25" fill="white"/>
            </clipPath>
            </defs>
            </svg>

            <div className={style.informationsResume}>
                <div className={style.resume}>
                    <p>Instituição</p> <span>UPAMA</span>
                </div>
                <div className={style.resume}>
                    <p>Total</p> <span className={style.total}>{valorTotal}</span>
                </div>
            </div>
        </div>
    )
}