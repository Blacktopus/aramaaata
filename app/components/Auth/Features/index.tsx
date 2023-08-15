import React from 'react';
import {FeaturesModule} from "@/app/components/Auth/Features/features.module";

const Index = ({setView}) => {
    return (
        <FeaturesModule className='mobile-wrapper'>
            <div className="title">
                <h2>Чем</h2>
                <svg width="207" height="30" viewBox="0 0 207 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M0.4 23V0.599998H15.44V4.44H4.56V9.88H14.8V13.72H4.56V19.16H15.44V23H0.4ZM28.0675 16.92H32.0675C31.9182 17.6453 31.6728 18.3493 31.3315 19.032C31.0115 19.7147 30.5635 20.3973 29.9875 21.08C29.4115 21.7413 28.6328 22.2853 27.6515 22.712C26.6915 23.1173 25.6035 23.32 24.3875 23.32C21.9768 23.32 19.9822 22.5307 18.4035 20.952C16.8462 19.352 16.0675 17.3147 16.0675 14.84C16.0675 12.3653 16.8462 10.3387 18.4035 8.76C19.9822 7.16 21.9768 6.36 24.3875 6.36C25.6035 6.36 26.6915 6.57333 27.6515 7C28.6328 7.40533 29.4115 7.93867 29.9875 8.6C30.5635 9.26133 31.0115 9.92267 31.3315 10.584C31.6728 11.2453 31.9182 11.9173 32.0675 12.6H28.0675C27.4275 10.8933 26.2008 10.04 24.3875 10.04C23.1715 10.04 22.1475 10.488 21.3155 11.384C20.4835 12.28 20.0675 13.432 20.0675 14.84C20.0675 16.248 20.4835 17.4 21.3155 18.296C22.1475 19.192 23.1715 19.64 24.3875 19.64C26.2648 19.64 27.4915 18.7333 28.0675 16.92ZM37.3218 18.296C38.1538 19.192 39.1778 19.64 40.3938 19.64C41.6098 19.64 42.6338 19.192 43.4658 18.296C44.2978 17.4 44.7138 16.248 44.7138 14.84C44.7138 13.432 44.2978 12.28 43.4658 11.384C42.6338 10.488 41.6098 10.04 40.3938 10.04C39.1778 10.04 38.1538 10.488 37.3218 11.384C36.4898 12.28 36.0738 13.432 36.0738 14.84C36.0738 16.248 36.4898 17.4 37.3218 18.296ZM34.4098 8.76C35.9884 7.16 37.9831 6.36 40.3938 6.36C42.8044 6.36 44.7884 7.16 46.3458 8.76C47.9244 10.3387 48.7138 12.3653 48.7138 14.84C48.7138 17.3147 47.9244 19.352 46.3458 20.952C44.7884 22.5307 42.8044 23.32 40.3938 23.32C37.9831 23.32 35.9884 22.5307 34.4098 20.952C32.8524 19.352 32.0738 17.3147 32.0738 14.84C32.0738 12.3653 32.8524 10.3387 34.4098 8.76ZM49.8212 13.88V0.599998H53.9812V13.88C53.9812 15.4587 54.4719 16.76 55.4532 17.784C56.4346 18.808 57.6506 19.32 59.1012 19.32C60.5519 19.32 61.7679 18.808 62.7493 17.784C63.7306 16.76 64.2213 15.4587 64.2213 13.88V0.599998H68.3813V13.88C68.3813 16.76 67.5386 19.0533 65.8533 20.76C64.1679 22.4667 61.9172 23.32 59.1012 23.32C56.2852 23.32 54.0346 22.4667 52.3492 20.76C50.6639 19.0533 49.8212 16.76 49.8212 13.88ZM70.2925 23V6.68H73.6525L73.9725 8.12H74.1325C74.3245 7.864 74.5592 7.62933 74.8365 7.416C75.4978 6.92533 76.2232 6.68 77.0125 6.68H80.2125V10.52H77.3325C75.3058 10.52 74.2925 11.5333 74.2925 13.56V23H70.2925ZM85.517 18.392C86.285 19.224 87.2877 19.64 88.525 19.64C89.7623 19.64 90.765 19.224 91.533 18.392C92.301 17.5387 92.685 16.3547 92.685 14.84C92.685 13.3253 92.301 12.152 91.533 11.32C90.765 10.4667 89.7623 10.04 88.525 10.04C87.2877 10.04 86.285 10.4667 85.517 11.32C84.749 12.152 84.365 13.3253 84.365 14.84C84.365 16.3547 84.749 17.5387 85.517 18.392ZM80.365 23V0.599998H84.365V8.44H84.525C84.8237 8.056 85.197 7.71467 85.645 7.416C86.6903 6.712 87.8637 6.36 89.165 6.36C91.2983 6.36 93.0797 7.14933 94.509 8.728C95.9597 10.2853 96.685 12.3227 96.685 14.84C96.685 17.3573 95.9597 19.4053 94.509 20.984C93.0797 22.5413 91.2983 23.32 89.165 23.32C87.757 23.32 86.541 22.9787 85.517 22.296C85.069 21.9973 84.685 21.6453 84.365 21.24H84.205L83.885 23H80.365ZM107.889 23L107.569 21.4H107.409C107.131 21.7413 106.758 22.0613 106.289 22.36C105.265 23 104.091 23.32 102.769 23.32C100.977 23.32 99.5367 22.84 98.4487 21.88C97.3821 20.92 96.8487 19.7467 96.8487 18.36C96.8487 16.696 97.4247 15.3733 98.5767 14.392C99.7287 13.4107 101.393 12.92 103.569 12.92H107.249V12.6C107.249 11.6827 106.982 10.9467 106.449 10.392C105.937 9.83733 105.243 9.56 104.369 9.56C103.537 9.56 102.865 9.77333 102.353 10.2C101.862 10.6267 101.574 11.1067 101.489 11.64H97.4887C97.6807 10.168 98.3634 8.92 99.5367 7.896C100.71 6.872 102.321 6.36 104.369 6.36C106.417 6.36 108.07 6.95733 109.329 8.152C110.609 9.34667 111.249 10.8293 111.249 12.6V23H107.889ZM107.249 16.44V15.96H103.889C101.862 15.96 100.849 16.6533 100.849 18.04C100.849 18.68 101.073 19.192 101.521 19.576C101.969 19.9387 102.598 20.12 103.409 20.12C104.625 20.12 105.563 19.8 106.225 19.16C106.907 18.4987 107.249 17.592 107.249 16.44ZM112.842 23V6.68H116.522L116.842 8.28H117.002C117.258 7.96 117.621 7.64 118.09 7.32C119.072 6.68 120.202 6.36 121.482 6.36C123.338 6.36 124.864 7 126.058 8.28C127.274 9.53867 127.882 11.192 127.882 13.24V23H123.882V13.56C123.882 12.5147 123.552 11.672 122.89 11.032C122.25 10.3707 121.408 10.04 120.362 10.04C119.317 10.04 118.464 10.3707 117.802 11.032C117.162 11.672 116.842 12.5147 116.842 13.56V23H112.842Z"
                        fill="#424242"/>
                    <path
                        d="M133.137 29.4L137.137 6.68H141.297L141.361 8.28H141.521C141.862 7.81067 142.438 7.37333 143.249 6.968C144.081 6.56267 144.977 6.36 145.937 6.36C147.899 6.36 149.531 7.04267 150.833 8.408C152.134 9.752 152.785 11.5227 152.785 13.72C152.785 16.3867 151.889 18.6587 150.097 20.536C148.305 22.392 146.225 23.32 143.857 23.32C142.321 23.32 141.158 23.0213 140.369 22.424C139.985 22.168 139.697 21.8693 139.505 21.528H139.345L137.937 29.4H133.137ZM143.825 18.84C144.934 18.84 145.905 18.4027 146.737 17.528C147.569 16.6533 147.985 15.544 147.985 14.2C147.985 13.176 147.675 12.3653 147.057 11.768C146.438 11.1493 145.638 10.84 144.657 10.84C143.547 10.84 142.577 11.2773 141.745 12.152C140.913 13.0053 140.497 14.104 140.497 15.448C140.497 16.472 140.806 17.2933 141.425 17.912C142.043 18.5307 142.843 18.84 143.825 18.84ZM153.105 15.992L154.737 6.68H159.537L158.033 15.352C157.99 15.6507 157.969 15.8533 157.969 15.96C157.969 16.728 158.203 17.3787 158.673 17.912C159.163 18.424 159.835 18.68 160.689 18.68C161.563 18.68 162.299 18.4133 162.897 17.88C163.494 17.3467 163.867 16.664 164.017 15.832L165.617 6.68H170.417L167.569 23H163.409L163.313 21.56H163.153C162.875 21.88 162.502 22.1787 162.033 22.456C161.158 23.032 160.07 23.32 158.769 23.32C157.062 23.32 155.665 22.7973 154.577 21.752C153.489 20.6853 152.945 19.288 152.945 17.56C152.945 17.0907 152.998 16.568 153.105 15.992ZM169.18 23L173.116 0.599998H177.916L173.98 23H169.18ZM175.205 17.88H180.005C180.005 18.0507 180.037 18.2533 180.101 18.488C180.186 18.7227 180.453 19 180.901 19.32C181.349 19.64 181.957 19.8 182.725 19.8C183.493 19.8 184.079 19.6293 184.485 19.288C184.911 18.9467 185.125 18.5307 185.125 18.04C185.125 17.6347 184.975 17.3147 184.677 17.08C184.378 16.8453 183.834 16.664 183.045 16.536L181.925 16.376C180.047 16.0987 178.671 15.608 177.797 14.904C176.922 14.1787 176.485 13.1973 176.485 11.96C176.485 10.36 177.103 9.02667 178.341 7.96C179.599 6.89333 181.381 6.36 183.685 6.36C186.01 6.36 187.77 6.86133 188.965 7.864C190.159 8.84533 190.799 10.0507 190.885 11.48H186.085C185.978 11.2027 185.829 10.968 185.637 10.776C185.146 10.2853 184.442 10.04 183.525 10.04C182.799 10.04 182.245 10.1787 181.861 10.456C181.477 10.712 181.285 11.0533 181.285 11.48C181.285 12.1627 181.925 12.6 183.205 12.792L184.805 13.016C188.218 13.4853 189.925 15 189.925 17.56C189.925 19.1813 189.327 20.5467 188.133 21.656C186.959 22.7653 185.103 23.32 182.565 23.32C180.111 23.32 178.287 22.84 177.093 21.88C175.919 20.8987 175.29 19.5653 175.205 17.88ZM201.245 18.04H205.981C205.427 19.3413 204.403 20.5467 202.909 21.656C201.437 22.7653 199.731 23.32 197.789 23.32C195.443 23.32 193.555 22.6373 192.125 21.272C190.717 19.9067 190.013 18.1467 190.013 15.992C190.013 13.2187 190.92 10.9253 192.733 9.112C194.568 7.27733 196.755 6.36 199.293 6.36C201.619 6.36 203.475 7.04267 204.861 8.408C206.248 9.752 206.941 11.4693 206.941 13.56C206.941 14.3067 206.845 15.16 206.653 16.12H194.685V16.28C194.685 17.24 194.995 18.0187 195.613 18.616C196.232 19.192 197.053 19.48 198.077 19.48C198.909 19.48 199.688 19.2453 200.413 18.776C200.797 18.52 201.075 18.2747 201.245 18.04ZM195.133 13.24H202.493C202.408 12.1733 202.067 11.3733 201.469 10.84C200.893 10.3067 200.115 10.04 199.133 10.04C198.301 10.04 197.523 10.3173 196.797 10.872C196.072 11.4267 195.517 12.216 195.133 13.24Z"
                        fill="#13902C"/>
                </svg>
                <h2>полезен?</h2>
            </div>
            <ul>
                <b>Уведомляет</b>
                <li>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M22.962 1.309C22.885 1.122 22.702 1 22.5 1C3.095 1 1 9.042 1 12.5C1 13.744 1.276 14.906 1.821 15.953C1.905 16.115 2.071 16.218 2.253 16.222C2.425 16.217 2.606 16.131 2.697 15.972C4.007 13.708 7.717 8.12 13.844 5.151C14.095 5.031 14.395 5.134 14.514 5.381C14.634 5.63 14.53 5.93 14.282 6.05C13.82 6.274 13.376 6.518 12.941 6.771C12.775 6.868 12.614 6.971 12.451 7.072C12.206 7.224 11.964 7.379 11.728 7.539C11.493 7.697 11.261 7.859 11.033 8.025C10.962 8.077 10.894 8.13 10.824 8.183C4.726 12.727 1 19.976 1 22.5C1 22.776 1.224 23 1.5 23C1.776 23 2 22.776 2 22.5C2 21.694 2.549 20.06 3.588 18.111C5.096 19.344 7.125 20 9.5 20C15.921 20 17.266 13.89 17.988 10.607C18.96 6.189 21.099 3.608 22.853 1.853C22.997 1.71 23.039 1.496 22.962 1.309Z"
                            fill="#13902C"/>
                    </svg>
                    <p> об экологичных мероприятиях района и города</p></li>
                <li>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M20 18C18.305 18 16.256 16.095 14.782 14H19C19.276 14 19.5 13.776 19.5 13.5C19.5 13.224 19.276 13 19 13C17.307 13 15.223 11.053 13.88 9H17C17.276 9 17.5 8.776 17.5 8.5C17.5 8.224 17.276 8 17 8C15.235 8 12.5 3.682 12.5 1.5C12.5 1.224 12.276 1 12 1C11.724 1 11.5 1.224 11.5 1.5C11.5 3.682 8.765 8 7 8C6.724 8 6.5 8.224 6.5 8.5C6.5 8.776 6.724 9 7 9H10.12C8.777 11.053 6.693 13 5 13C4.724 13 4.5 13.224 4.5 13.5C4.5 13.776 4.724 14 5 14H9.218C7.744 16.095 5.695 18 4 18C3.724 18 3.5 18.224 3.5 18.5C3.5 18.776 3.724 19 4 19H20C20.276 19 20.5 18.776 20.5 18.5C20.5 18.224 20.276 18 20 18Z"
                            fill="#13902C"/>
                        <path
                            d="M13 20H11C10.724 20 10.5 20.224 10.5 20.5V22.5C10.5 22.776 10.724 23 11 23H13C13.276 23 13.5 22.776 13.5 22.5V20.5C13.5 20.224 13.276 20 13 20Z"
                            fill="#13902C"/>
                    </svg>
                    <p>о примерном местоположении пожаров в лесах, объявление противопожарного режима</p></li>
            </ul>
            <ul>
                <b>Показывает на карте</b>
                <li>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_103_737)">
                            <path d="M22.0044 16H16.0044V14.5C16.0044 14.292 15.8764 14.106 15.6824 14.033C15.4874 13.96 15.2694 14.012 15.1314 14.168L11.1314 18.668C10.9634 18.857 10.9634 19.143 11.1314 19.332L15.1314 23.832C15.2284 23.941 15.3644 24 15.5044 24C15.5644 24 15.6244 23.989 15.6824 23.967C15.8764 23.893 16.0044 23.707 16.0044 23.5V22H16.9324C18.0804 22 19.1564 21.436 19.8074 20.495L22.4124 16.787C22.5194 16.634 22.5334 16.434 22.4474 16.269C22.3614 16.104 22.1914 16 22.0044 16Z" fill="#13902C"/>
                            <path d="M6.95214 14.724L7.72814 13.171L9.28114 13.947C9.46714 14.041 9.69414 14.008 9.84614 13.865C9.99814 13.722 10.0471 13.5 9.96614 13.307L7.46614 7.307C7.38814 7.122 7.20614 7 7.00414 7H0.504139C0.302139 7 0.120139 7.122 0.0421393 7.309C-0.0348607 7.496 0.00813927 7.71 0.151139 7.854L1.89614 9.599L0.237139 12.916C0.00113928 13.387 -0.0488607 13.909 0.0921393 14.424C0.113139 14.499 0.151139 14.569 0.202139 14.626C0.419139 14.867 0.717139 15 1.04114 15H6.50414C6.69414 15 6.86714 14.893 6.95214 14.724Z" fill="#13902C"/>
                            <path d="M9.50391 16H2.04291C1.85691 16 1.68691 16.103 1.59991 16.268C1.51391 16.433 1.52591 16.632 1.63191 16.785L4.19891 20.493C4.85191 21.436 5.92791 22 7.07591 22H9.50391C9.77991 22 10.0039 21.776 10.0039 21.5V16.5C10.0039 16.224 9.78091 16 9.50391 16Z" fill="#13902C"/>
                            <path d="M23.982 13.7331L23.479 13.7261L23.977 13.6811C23.975 13.6591 23.967 13.6181 23.962 13.5961C23.95 13.5411 23.931 13.4591 23.883 13.3631C23.854 13.3041 23.838 13.2371 23.835 13.1551C23.833 13.0921 23.837 13.0831 23.813 13.0251C23.802 12.9861 23.781 12.9301 23.761 12.8951L21.441 8.7551C21.306 8.5141 21.003 8.4271 20.762 8.5631L16.262 11.0631C16.142 11.1291 16.055 11.2421 16.02 11.3751C15.986 11.5081 16.008 11.6491 16.081 11.7651L17.956 14.7651C18.047 14.9111 18.207 15.0001 18.379 15.0001H22.871C23.265 15.0001 23.625 14.8001 23.833 14.4631C23.886 14.3771 23.956 14.2361 23.993 14.0041C23.999 13.9151 23.992 13.8241 23.982 13.7331Z" fill="#13902C"/>
                            <path d="M14.3431 5.389L12.1921 7.11C12.0391 7.233 11.9721 7.433 12.0201 7.623C12.0681 7.813 12.2231 7.957 12.4161 7.992L17.9161 8.992C17.9451 8.998 17.9751 9 18.0051 9C18.2041 9 18.3871 8.881 18.4661 8.692L20.9661 2.692C21.0471 2.499 20.9981 2.276 20.8461 2.134C20.6931 1.991 20.4681 1.958 20.2811 2.052L18.6761 2.855L17.5141 1.113C17.0491 0.416 16.2721 0 15.4341 0H11.8541C11.6721 0 11.5041 0.099 11.4161 0.258C11.3281 0.418 11.3341 0.612 11.4311 0.766L14.3431 5.389Z" fill="#13902C"/>
                            <path d="M12.5743 4.19591L10.3823 1.00691C10.0243 0.486906 9.47631 0.143906 8.83931 0.0419063C8.80431 0.0359063 8.77031 0.0339062 8.73431 0.0359062C7.73931 0.0869063 6.83231 0.563906 6.24631 1.34591L4.10431 4.19991C4.01731 4.31591 3.98431 4.46391 4.01531 4.60591C4.04631 4.74791 4.13731 4.86991 4.26531 4.93891L9.76531 7.93891C9.84131 7.97991 9.92331 7.99991 10.0043 7.99991C10.1613 7.99991 10.3153 7.92591 10.4113 7.79091L12.5693 4.76991C12.6913 4.59891 12.6933 4.36891 12.5743 4.19591Z" fill="#13902C"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_103_737">
                                <rect width="24" height="24" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>
                    <p> куда можно сдать перерабатываемые вещи такие как: батарейки, стеклянные и пластиковые тары, макулатуру и т.д.</p></li>
                <li>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 6V19" stroke="#13902C" strokeLinecap="round"/>
                        <path d="M21 6L21 19" stroke="#13902C" strokeLinecap="round"/>
                        <path d="M3 6L3 19" stroke="#13902C" strokeLinecap="round"/>
                        <path d="M21 19C21 19 20 17 16.5 17C13 17 12 19 12 19" stroke="#13902C" strokeLinecap="round"/>
                        <path d="M12 19C12 19 11 17 7.5 17C4 17 3 19 3 19" stroke="#13902C" strokeLinecap="round"/>
                        <path d="M21 6C21 6 20 4 16.5 4C13 4 12 6 12 6" stroke="#13902C" strokeLinecap="round"/>
                        <path d="M12 6C12 6 11 4 7.5 4C4 4 3 6 3 6" stroke="#13902C" strokeLinecap="round"/>
                    </svg>

                    <p>куда можно сдать ненужные книги</p></li>
                <li>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.995 9.854C12.056 9.793 12.093 9.713 12.117 9.627C12.123 9.606 12.127 9.587 12.13 9.565C12.133 9.543 12.143 9.523 12.143 9.5C12.143 9.434 12.129 9.371 12.105 9.313C12.104 9.311 12.105 9.31 12.105 9.308L12.104 9.307C12.07 9.226 12.01 9.162 11.94 9.109C11.923 9.096 11.908 9.086 11.89 9.076C11.817 9.032 11.735 9 11.643 9H6.547L6.119 7H14.643C14.919 7 15.143 6.776 15.143 6.5C15.143 6.224 14.919 6 14.643 6H5.5C5.349 6 5.206 6.068 5.111 6.186C5.016 6.304 4.979 6.457 5.011 6.605L5.654 9.605V9.606L6.623 14.134C6.661 14.314 6.794 14.457 6.97 14.509C7.016 14.523 7.064 14.53 7.112 14.53C7.243 14.53 7.37 14.478 7.466 14.384L11.995 9.854ZM19.651 4.398C19.643 4.389 19.64 4.378 19.632 4.369C19.624 4.361 19.612 4.358 19.603 4.35C17.523 2.281 14.658 1 11.5 1C5.159 1 0 6.159 0 12.5C0 15.658 1.281 18.523 3.35 20.603C3.358 20.612 3.361 20.623 3.369 20.632C3.378 20.641 3.389 20.643 3.398 20.651C5.478 22.719 8.342 24 11.5 24C17.841 24 23 18.841 23 12.5C23 9.342 21.719 6.478 19.651 4.398ZM1 12.5C1 6.71 5.71 2 11.5 2C14.215 2 16.685 3.045 18.551 4.742L17.199 6.094C17.154 6.126 17.116 6.164 17.084 6.209L14.209 9.084C14.177 9.104 14.143 9.12 14.116 9.147L7.258 16.005C7.237 16.026 7.23 16.056 7.214 16.08L3.742 19.552C2.045 17.685 1 15.215 1 12.5ZM16.656 8.051L16.453 9H15.707L16.656 8.051ZM11.5 23C8.785 23 6.315 21.955 4.449 20.258L7.321 17.386L8.011 20.604C8.061 20.835 8.264 21 8.5 21H14.5C14.735 21 14.939 20.835 14.989 20.604L17.346 9.604L17.958 6.749L19.258 5.449C20.955 7.315 22 9.785 22 12.5C22 18.29 17.29 23 11.5 23Z" fill="#13902C"/>
                    </svg>
                    <p>загрязнённые зоны, которые нуждаются в уборке</p></li>
            </ul>
            <ul>
                <b>Даёт возможность</b>
                <li>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 0C7.313 0 3.5 3.813 3.5 8.5C3.5 16.718 11.339 23.59 11.673 23.878C11.767 23.959 11.884 24 12 24C12.116 24 12.233 23.959 12.327 23.878C12.661 23.589 20.5 16.717 20.5 8.5C20.5 3.813 16.687 0 12 0ZM12 13C9.515 13 7.5 10.985 7.5 8.5C7.5 6.015 9.515 4 12 4C14.485 4 16.5 6.015 16.5 8.5C16.5 10.985 14.485 13 12 13Z" fill="#13902C"/>
                    </svg>
                    <p> показать проблемное место, которое волнует уже долгое время  </p></li>
                <li>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.9368 12.9432H6.93111V11.4545H12.9141C13.4292 11.4545 13.8554 11.3693 14.1925 11.1989C14.5296 11.0246 14.7796 10.786 14.9425 10.483C15.1054 10.1761 15.1868 9.82386 15.1868 9.42614C15.1868 9.0322 15.1054 8.67992 14.9425 8.36932C14.7796 8.05871 14.5315 7.81439 14.1982 7.63636C13.8648 7.45455 13.4444 7.36364 12.9368 7.36364H10.4595V17.5H8.70952V5.86364H12.9368C13.8194 5.86364 14.5561 6.02273 15.147 6.34091C15.7417 6.65909 16.1868 7.08712 16.4822 7.625C16.7815 8.16288 16.9311 8.76136 16.9311 9.42045C16.9311 10.0871 16.7796 10.6875 16.4766 11.2216C16.1773 11.7519 15.7304 12.1723 15.1357 12.483C14.5447 12.7898 13.8118 12.9432 12.9368 12.9432ZM13.022 13.9205V15.4148H6.93111V13.9205H13.022Z" fill="#13902C"/>
                        <rect x="1" y="1" width="22" height="22" rx="11" stroke="#13902C" strokeWidth="2"/>
                    </svg>
                    <p>получить бонусы за выполнение задания</p></li>
                <li>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.4614 0.309C22.3844 0.122 22.2014 0 21.9994 0C18.6454 0 15.2094 1.094 13.6444 2.66C12.6584 3.645 12.3204 5.028 12.6094 6.296C13.8234 4.447 15.7594 3 16.9994 3C17.2754 3 17.4994 3.224 17.4994 3.5C17.4994 3.776 17.2754 4 16.9994 4C15.7434 4 12.8924 6.524 12.5364 9H11.9994C11.7234 9 11.4994 9.224 11.4994 9.5V10.293L9.35345 8.146C9.15844 7.951 8.84145 7.951 8.64645 8.146L1.64645 15.146C1.50345 15.289 1.46045 15.504 1.53845 15.691C1.61545 15.878 1.79845 16 2.00045 16H2.50045V23.5C2.50045 23.776 2.72445 24 3.00045 24H15.0004C15.2764 24 15.5004 23.776 15.5004 23.5V16H16.0004C16.2024 16 16.3854 15.878 16.4624 15.691C16.5404 15.504 16.4974 15.289 16.3544 15.146L14.5004 13.292V9.5C14.5004 9.224 14.2764 9 14.0004 9H13.5504C13.5944 8.755 13.6654 8.512 13.7614 8.275C14.4314 8.864 15.3494 9.006 16.0244 9.006C17.3264 9.006 18.6644 8.543 19.3534 7.854C20.5814 6.626 20.8924 5.115 21.1664 3.781C21.4084 2.605 21.6174 1.59 22.3534 0.854C22.4964 0.71 22.5384 0.495 22.4614 0.309ZM11.4994 20.5C11.4994 20.776 11.2754 21 10.9994 21H6.99944C6.72344 21 6.49944 20.776 6.49944 20.5V16.5C6.49944 16.224 6.72344 16 6.99944 16H10.9994C11.2754 16 11.4994 16.224 11.4994 16.5V20.5Z" fill="#13902C"/>
                    </svg>
                    <p>сделать Екатеринбург экологически чистым городом</p></li>
            </ul>
            <button onClick={ () => setView('Register')}>Далее</button>
        </FeaturesModule>
    );
};

export default Index;