export const AnchorDown = ({ customClass }: { customClass: string}) => (
  <svg
    width="15"
    height="10"
    viewBox="0 0 15 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={customClass}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.17128 4.28108C6.19693 3.4034 4.62299 1.79434 3.57369 0.770386C2.52439 -0.180426 1.84984 0.624107 0.575697 1.94062C-0.84835 3.33026 0.575696 4.06166 2.59934 6.03642L6.27188 9.62025C7.62098 10.7905 8.74523 9.03513 10.544 7.35293L12.8891 5.11213C15.2126 2.91795 15.7372 2.91795 13.8635 1.16261C12.2146 -0.5196 12.2895 -0.5196 9.66626 2.11342C8.46707 3.21051 7.54603 4.06166 7.17128 4.28108Z"
      fill="white"
    />
  </svg>
);

export const Trophy = ({ customClass }: { customClass: string}) => (
  <>
    <svg
      width="35"
      height="37"
      viewBox="0 0 35 37"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={customClass}
    >
      <path
        d="M12.6897 18.9816C2.55592 14.2258 -0.00353104 9.22079 0.974471 6.10564C1.7652 3.63429 4.61597 2.45054 8.25747 3.1151L7.77887 5.77336C5.59397 5.37877 3.88767 5.85643 3.55473 6.93635C3.01371 8.61853 5.32346 12.5644 13.8342 16.5518L12.6897 18.9816Z"
        fill="#F7A491"
      />
      <path
        d="M22.2408 18.9816L21.0963 16.531C29.607 12.5436 31.9168 8.59779 31.3757 6.91562C31.022 5.8357 29.3365 5.37881 27.1516 5.75263L26.673 3.09437C30.3145 2.45057 33.1653 3.63433 33.956 6.08491C34.9548 9.22082 32.3954 14.2258 22.2408 18.9816Z"
        fill="#F7A491"
      />
      <path
        d="M18.7242 15.5342H16.2272V29.4901H18.7242V15.5342Z"
        fill="#F7A491"
      />
      <path
        d="M4.11658 0L10.6921 17.8186C11.7325 20.643 14.4376 22.5329 17.4549 22.5329C20.4721 22.5329 23.1772 20.6638 24.2176 17.8186L30.7931 0H4.11658Z"
        fill="#F7A491"
      />
      <path
        d="M18.9322 29.49H15.9982C13.3347 29.49 11.1914 31.6291 11.1914 34.2873H23.739C23.739 31.6291 21.5957 29.49 18.9322 29.49Z"
        fill="#F7A491"
      />
      <path
        d="M24.4572 36.7544V34.2623H10.4738V36.7544H24.4572Z"
        fill="#FF7C7C"
      />
      <path
        d="M17.4756 2.88666L18.9738 7.49707H23.8222L19.8894 10.3422L21.4084 14.9527L17.4756 12.1075L13.5428 14.9527L15.041 10.3422L11.1082 7.49707H15.9774L17.4756 2.88666Z"
        fill="#FFFBFA"
      />
    </svg>
  </>
);

export const Shield = ({ customClass }: { customClass: string}) => (
  <svg
    width="35"
    height="35"
    viewBox="0 0 35 35"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={customClass}
  >
    <path
      d="M17.5 35C27.165 35 35 27.165 35 17.5C35 7.83502 27.165 0 17.5 0C7.83502 0 0 7.83502 0 17.5C0 27.165 7.83502 35 17.5 35Z"
      fill="#F7A491"
    />
    <path
      d="M17.5 32.4486C9.257 32.4486 2.58411 25.743 2.58411 17.5327C2.58411 9.32242 9.257 2.58411 17.5 2.58411C25.743 2.58411 32.4159 9.28971 32.4159 17.5C32.4159 25.7103 25.743 32.4486 17.5 32.4486ZM17.5 3.72897C9.91121 3.72897 3.72897 9.91121 3.72897 17.5C3.72897 25.0888 9.91121 31.271 17.5 31.271C25.0888 31.271 31.271 25.0888 31.271 17.5C31.271 9.91121 25.0888 3.72897 17.5 3.72897Z"
      fill="#C4886E"
    />
    <path
      d="M17.4999 7.81775L19.6588 14.5234H26.6915L20.9999 18.6449L23.1915 25.3178L17.4999 21.1963L11.8083 25.3178L13.9999 18.6449L8.30835 14.5234H15.3411L17.4999 7.81775Z"
      fill="white"
    />
  </svg>
);

export const Star = ({ fill, customClass }: { fill: string, customClass: string }) => (
  <svg
    width="35"
    height="33"
    viewBox="0 0 35 33"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={customClass}
  >
    <path
      d="M17.1644 0.438477L22.829 10.4226L34.0749 12.7247L26.3299 21.1974L27.6157 32.6043L17.1644 27.8565L6.71306 32.6043L7.99884 21.1974L0.253799 12.7247L11.4998 10.4226L17.1644 0.438477Z"
      fill={fill}
    />
  </svg>
);

export const Check = () => (
  <svg
    width="20"
    height="15"
    viewBox="0 0 20 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.17128 9.28108C6.19693 8.4034 4.62299 6.79434 3.57369 5.77039C2.52439 4.81957 1.84984 5.62411 0.575696 6.94062C-0.84835 8.33026 0.575696 9.06166 2.59934 11.0364L6.27188 14.6202C7.62098 15.7905 8.74523 14.0351 10.544 12.3529L17.8891 5.11213C20.2126 2.91795 20.7372 2.91795 18.8635 1.16261C17.2146 -0.5196 17.2895 -0.5196 14.6663 2.11342C13.4671 3.21051 7.54603 9.06166 7.17128 9.28108Z"
      fill="#FF7C7C"
    />
  </svg>
);

export const Wrong = () => (
  <svg
    width="15"
    height="16"
    viewBox="0 0 15 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3.14303 15.432L7.49457 11.0174L11.8488 15.432C13.5517 17.1586 16.1599 14.5606 14.4328 12.8095L10.0812 8.39754L14.4328 3.98287C16.133 2.26181 13.5463 -0.360769 11.8488 1.36303L7.49457 5.77496L3.14303 1.36303C1.44284 -0.360769 -1.14114 2.26181 0.556361 3.98287L4.91059 8.39754L0.556361 12.8095C-1.14114 14.5333 1.44284 17.1558 3.14303 15.432Z"
      fill="#4953BE"
    />
  </svg>
);
