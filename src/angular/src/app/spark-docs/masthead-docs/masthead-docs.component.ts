import { Component } from '@angular/core';

@Component({
  selector: 'sprk-masthead-docs',
  template: `
    <div class="drizzle-o-ContentGrouping drizzle-c-Preview">
      <h2 class="drizzle-b-h2">Masthead (Extended)</h2>
      <sprk-masthead
        additionalClasses="angular-docs-u-Masthead-docs"
        [bigNavLinks]="links"
        [narrowNavLinks]="narrowLinks"
        [narrowSelector]="mySelector"
        idString="masthead-1"
      >
        <svg
          logo-slot
          class="sprk-c-Masthead__logo"
          width="250"
          viewBox="0 0 300 83"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none">
            <path
              d="m73.4305835 75.8450704 16.056338-28.0080483c2.3541248-4.1348088 2.3541248-9.2354124-.0301811-13.3400402l-4.4969818-7.7565392-11.1971831 19.2555332c.5734406 6.307847-2.8973844 12.2837022-8.6619719 14.9094567l-12.5855131 21.6700201 9.386318-.0301811c4.7384305-.0301811 9.1448692-2.5653923 11.529175-6.7002012z"
              fill="#ff451a"
            />
            <g fill="#000">
              <path
                d="m129.657948 49.7082495h-25.684105c-.754527 0-1.478873-.3018109-2.022133-.8450704-.543259-.5432596-.84507-1.2676057-.84507-2.0221328 0-.7545272.301811-1.4788733.84507-2.0221328.54326-.5432596 1.267606-.8450704 2.022133-.8450704h25.714286c3.802817 0 6.971831-2.9879276 7.062374-6.7605634.030181-1.8712274-.663984-3.6820926-1.961771-5.0100604-1.297786-1.3279678-3.108652-2.082495-4.979879-2.082495h-17.565392c-6.971831 0-12.7364187-5.5533199-12.826962-12.5251509-.0301811-3.3802816 1.297787-6.639839 3.682093-9.02414483 2.384305-2.41448692 5.613682-3.74245473 8.993963-3.74245473h25.623743c1.569416 0 2.867203 1.26760564 2.867203 2.86720322 0 .75452717-.301811 1.47887324-.84507 2.0221328-.54326.54325954-1.267606.84507044-2.022133.84507044h-25.503018c-3.802817 0-6.971831 2.9879275-7.062375 6.7605634-.060362 1.8712273.663984 3.6820925 1.961771 5.0100603s3.108652 2.082495 4.979879 2.082495h17.746479c3.380282 0 6.609658 1.3581489 8.993964 3.7424547 2.384306 2.3843059 3.712274 5.6438632 3.682093 9.0241449-.090544 6.971831-5.885312 12.5251509-12.857143 12.5251509z"
              />
              <path
                d="m170.885312 4.64788732h-21.881288v42.28370218c-.030181 1.0563381.513079 2.0523139 1.418511 2.5653924.905433.5130785 2.022133.5432595 2.927566 0 .905432-.5432596 1.448692-1.5392354 1.418511-2.5653924v-36.5191147h16.267605c3.953723.0301811 7.152918 3.1690141 7.243461 7.1227365.030181 1.9315895-.724346 3.7726358-2.082495 5.1307847-1.38833 1.418511-3.319919 2.2334004-5.311871 2.2334004h-8.480885c-1.569417.0603622-2.806841 1.3279678-2.806841 2.8973843s1.237424 2.8370221 2.806841 2.8973843h8.601609c3.470825 0 6.790745-1.38833 9.235413-3.8631791s3.802817-5.7947686 3.772636-9.2655935c0-7.1227365-5.915493-12.91750508-13.128773-12.91750508z"
              />
              <path
                d="m261.126761 44.9094567-13.8833-14.2152917h1.720322c3.470825 0 6.790744-1.38833 9.235412-3.8631791s3.802817-5.8249497 3.772636-9.2957746c-.060362-7.1227365-5.975855-12.88732398-13.189135-12.88732398h-21.881288v42.28370218c-.030181 1.0563381.513079 2.0523139 1.418512 2.5653924.905432.5432595 2.022132.5432595 2.927565 0 .905433-.5432596 1.448692-1.5392354 1.418511-2.5653924v-36.5191147h16.267606c3.953722.0301811 7.152917 3.1690141 7.24346 7.1227365.030181 1.9315895-.724346 3.7726358-2.082495 5.1307847-1.38833 1.418511-3.319919 2.2334004-5.311871 2.2334004h-8.148893c-1.297787-.1509055-2.565393.6036217-3.04829 1.8410463-.482897 1.2374245-.060362 2.6257545.995976 3.4104627l18.380282 18.832998c1.146881.9657948 2.837022.9054326 3.89336-.1509054 1.146881-1.0865191 1.237424-2.77666.27163-3.9235413z"
              />
              <path
                d="m299.034205 45.2414487-16.38833-19.7987928 14.336016-15.93561365c1.056338-1.17706237.965795-3.01810865-.211267-4.07444668-1.177063-1.05633802-3.018109-.96579477-4.074447.21126761l-20.251509 22.57545272v-20.8249497c.030181-1.05633803-.513078-2.05231389-1.418511-2.56539236-.905433-.54325955-2.022133-.54325955-2.927565 0-.905433.54325956-1.448693 1.53923542-1.418512 2.56539236v39.5372233c-.030181 1.0563381.513079 2.0523139 1.418512 2.5653924.905432.5432595 2.022132.5432595 2.927565 0 .905433-.5432596 1.448692-1.5392354 1.418511-2.5653924v-10.0503018l6.338028-7.0623742 15.845071 19.1348088c.482897.6036218 1.177062.9657948 1.96177 1.026157h.27163c1.1167 0 2.142857-.6639839 2.595573-1.6599598.452717-1.0261569.301811-2.2032193-.422535-3.0784708z"
              />
              <path
                d="m221.076459 46.1770624-17.20322-39.20523141c-.694165-1.59959759-2.293762-2.62575453-4.044265-2.62575453s-3.350101 1.02615694-4.044266 2.62575453l-17.203219 39.20523141c-.633803 1.4486921.030181 3.1086519 1.478873 3.7424547s3.108652-.0301811 3.742455-1.4486922l16.026157-36.5191146 5.643863 12.8571428h-5.704225c-1.65996 0-3.018109 1.3581489-3.018109 3.0181087 0 1.6599597 1.358149 3.0181086 3.018109 3.0181086h8.360161l7.726358 17.6257545c.663984 1.38833 2.323943 2.0221328 3.712273 1.38833 1.448693-.6338028 2.112676-2.2635815 1.509055-3.6820925z"
              />
              <path
                d="m105.84507 58.7022133c5.945674 0 9.235413 3.6820925 9.235413 9.7183098s-3.289739 9.748491-9.235413 9.748491h-6.3983899v-19.4668008zm-4.557344 17.806841h4.466801c4.768612 0 7.454729-3.0181086 7.454729-8.0583501 0-5.0402414-2.716298-8.0583501-7.454729-8.0583501h-4.466801z"
              />
              <path
                d="m129.959759 78.1690141h-11.770624v-19.4668008h11.770624v1.6599597h-9.929578v7.0020121h9.416499v1.6599598h-9.416499v7.4849094h9.929578z"
              />
              <path
                d="m134.15493 73.1287726c.241448 2.2334004 2.474849 3.7726359 5.462776 3.7726359 2.927566 0 5.010061-1.6297787 5.010061-3.802817 0-1.8410462-1.327968-3.0181086-4.346077-3.7726358l-2.2334-.5734406c-3.651912-.9054326-5.191147-2.444668-5.191147-5.0704225 0-3.138833 2.716298-5.4024145 6.67002-5.4024145 3.712274 0 6.488934 2.2032193 6.67002 5.1609658h-1.871227c-.301811-2.082495-2.173038-3.470825-4.859155-3.470825-2.806841 0-4.738431 1.5392354-4.738431 3.6519115 0 1.6901408 1.207244 2.6861167 4.16499 3.4406438l1.93159.4828974c4.014084.9959759 5.674044 2.5955735 5.674044 5.3420523 0 3.4104628-2.806841 5.6740443-7.062374 5.6740443-4.014085 0-6.911469-2.2032193-7.152918-5.4627767z"
              />
              <path
                d="m149.45674 78.1690141v-19.4668008h1.871228v19.4668008z"
              />
              <path
                d="m163.158954 78.5915493c-5.28169 0-8.722334-4.0140845-8.722334-10.1408451 0-6.1267605 3.440644-10.140845 8.692153-10.140845 4.16499 0 7.273641 2.3843058 7.967806 6.0965794h-1.871227c-.814889-2.7766599-3.018109-4.3762575-6.096579-4.3762575-4.104628 0-6.790745 3.3199195-6.790745 8.4205231s2.686117 8.4507043 6.820926 8.4507043c3.832998 0 6.277666-2.414487 6.277666-6.0965795v-.6639839h-5.945674v-1.6599598h7.78672v2.1730382c0 4.7987928-3.199195 7.9376258-8.118712 7.9376258z"
              />
              <path
                d="m174.44668 78.1690141v-19.4668008h1.810865l11.348089 16.1770624h.181086v-16.1770624h1.810866v19.4668008h-1.810866l-11.378269-16.1770624h-.181087v16.1770624z"
              />
              <path
                d="m200.794769 73.1287726c.241448 2.2334004 2.474849 3.7726359 5.462776 3.7726359 2.927566 0 5.010061-1.6297787 5.010061-3.802817 0-1.8410462-1.327968-3.0181086-4.346077-3.7726358l-2.2334-.5734406c-3.651912-.9054326-5.191147-2.444668-5.191147-5.0704225 0-3.138833 2.716298-5.4024145 6.67002-5.4024145 3.742455 0 6.488934 2.2032193 6.67002 5.1609658h-1.871227c-.301811-2.082495-2.173038-3.470825-4.889336-3.470825-2.806841 0-4.70825 1.5392354-4.70825 3.6519115 0 1.6901408 1.207244 2.6861167 4.16499 3.4406438l1.93159.4828974c4.014084.9959759 5.674044 2.5955735 5.674044 5.3420523 0 3.4104628-2.806841 5.6740443-7.062374 5.6740443-4.014085 0-6.94165-2.2032193-7.152918-5.4627767z"
              />
              <path
                d="m221.348089 78.1690141v-8.4205232l-7.002013-11.0462776h2.112677l5.704225 9.1750503h.181086l5.704226-9.1750503h2.112676l-6.971831 11.0462776v8.4205232z"
              />
              <path
                d="m233.209256 73.1287726c.241448 2.2334004 2.474849 3.7726359 5.462776 3.7726359 2.927566 0 5.010061-1.6297787 5.010061-3.802817 0-1.8410462-1.327968-3.0181086-4.346077-3.7726358l-2.2334-.5734406c-3.651912-.9054326-5.191147-2.444668-5.191147-5.0704225 0-3.138833 2.716298-5.4024145 6.67002-5.4024145 3.712274 0 6.488934 2.2032193 6.67002 5.1609658h-1.871227c-.301811-2.082495-2.173039-3.470825-4.859155-3.470825-2.806841 0-4.738431 1.5392354-4.738431 3.6519115 0 1.6901408 1.207244 2.6861167 4.16499 3.4406438l1.93159.4828974c4.014084.9959759 5.674044 2.5955735 5.674044 5.3420523 0 3.4104628-2.806841 5.6740443-7.062374 5.6740443-4.014085 0-6.94165-2.2032193-7.152918-5.4627767z"
              />
              <path
                d="m253.732394 78.1690141v-17.8068411h-6.519114v-1.6599597h14.909456v1.6599597h-6.549295v17.8068411z"
              />
              <path
                d="m276.458753 78.1690141h-11.770624v-19.4668008h11.770624v1.6599597h-9.899397v7.0020121h9.416499v1.6599598h-9.416499v7.4849094h9.899397z"
              />
              <path
                d="m279.748491 78.1690141v-19.4668008h2.112676l7.183099 16.9617706h.181086l7.152918-16.9617706h2.142857v19.4668008h-1.720322v-15.8752515h-.150906l-6.730382 15.7847082h-1.599597l-6.730383-15.7847082h-.120724v15.8752515z"
              />
            </g>
            <path
              d="m65.0704225 60.9356137c-.0301811.0301811-.0905432.0603622-.1207243.0603622l-27.7062374 12.6760563-5.221328 8.9637827 20.4627767-.0603622z"
              fill="#ff5c1c"
            />
            <path
              d="m74.0945674 10.2615694-13.0080483 22.3641851c6.8209256.9657948 12.0724346 6.5191147 12.6458753 13.4004024l11.1971831-19.2555332-9.0241449-15.5130784c-.362173-.6639839-1.056338-1.026157-1.8108652-.9959759z"
              fill="#ff5c1c"
            />
            <path
              d="m36.3078471 74.0945674-9.8390342 4.4969819c-.7847083.362173-1.2676057 1.2072435-1.1468813 2.0523139.1207243.8450704.7545272 1.5694165 1.5995976 1.7203219.8752515.1810865 1.750503.2716298 2.6257545.2716298h.0301811 2.444668l5.221328-8.9637827z"
              fill="#ff721e"
            />
            <path
              d="m61.0865191 32.6257545 13.0080483-22.3641851c-.2414487 0-.4828974.0603622-.7243461.1810865l-6.1871227 2.7464789-20.4929578 9.0845071-11.0764587 19.0442655 16.9919517-7.5754527c2.6559356-1.1770623 5.6136821-1.5694165 8.4808853-1.1167002z"
              fill="#ff721e"
            />
            <path
              d="m29.9396378 29.6981891c-3.2595573 1.4486922-4.7987927 5.2515091-3.4708249 8.4507043.6639839 1.5995975 1.9617706 2.8672032 3.5915493 3.5311871 1.6297786.6338028 3.4406438.6036217 5.0100603-.0905433l.5432596-.2414487 11.0764587-19.0744466z"
              fill="#ff8920"
            />
            <path
              d="m64.7686117 44.7887324c-.6639839-1.5995976-1.9617707-2.8672032-3.5915493-3.5311871-1.6297787-.6338028-3.4406439-.6036218-5.0100604.0905432l-.2112676.0905433-11.0764587 19.0744467 16.418511-7.2736419c3.2595574-1.4486921 4.8289739-5.2213279 3.470825-8.4507042z"
              fill="#ff5c1c"
            />
            <path
              d="m30.3923541 50.3420523-12.9476861 22.303823c.1509054-.0301811.3018109-.0603622.4225352-.1207244l6.1871228-2.7464789 20.8551307-9.2354124 11.0764588-19.0744467-17.3541248 7.7263581c-2.5955734 1.1468813-5.4627766 1.5392354-8.2394366 1.1468813z"
              fill="#ff721e"
            />
            <path
              d="m54.9295775 8.84305835 9.8390342-4.49698189c.8148893-.36217304 1.2676056-1.20724346 1.1770623-2.08249497-.0905432-.87525151-.7545271-1.5694165-1.6297786-1.72032193-.8752515-.18108652-1.750503-.27162978-2.6257546-.27162978h-.030181-2.2032194l-5.1307847 8.81287726z"
              fill="#ff721e"
            />
            <path
              d="m18.7726358 41.8309859c-.6338028-1.4185111-1.056338-2.9275654-1.2374245-4.4969819l-11.10663987 19.1046278 8.87323947 15.2716298c.4225352.724346 1.2676056 1.1167002 2.112676.9356137l12.9778672-22.303823c-5.0704225-.6639839-9.4466801-3.8631791-11.6197183-8.5110664z"
              fill="#ff8920"
            />
            <path
              d="m26.5291751 21.8209256 27.8269617-12.70623747 5.1006036-8.81287726-20.4627766.06036217z"
              fill="#ff8920"
            />
            <path
              d="m18.3802817 30.331992c1.38833-3.7424548 4.2555332-6.7605634 7.9074447-8.3903421l.2414487-.0905433 12.4647887-21.45875247h-9.6277666c-4.7686117.03018108-9.1750503 2.56539235-11.5593562 6.7002012l-16.05633798 28.00804827c-2.35412475 4.1348089-2.32394366 9.2354125.06036217 13.3400403l4.61770624 7.9678068 11.10663987-19.1046278c-.3018109-2.3541247 0-4.7384305.8450704-6.9718309z"
              fill="#ffa022"
            />
          </g>
        </svg>

        <div
          little-nav-slot
          class="sprk-o-Stack__item sprk-o-Stack__item--flex@xxs sprk-o-Stack sprk-o-Stack--center-column sprk-o-Stack--center-row"
        >
          <div class="sprk-o-Stack__item sprk-u-Position--relative">
            <sprk-dropdown
              dropdownType="mastheadSelector"
              additionalTriggerClasses="sprk-c-Masthead__selector sprk-b-Link sprk-b-Link--plain sprk-o-Stack sprk-o-Stack--split@xxs sprk-o-Stack--center-column"
              triggerText="My Selector"
              additionalClasses="sprk-c-Masthead__selector-dropdown sprk-u-Width-100"
              triggerIconType="chevron-down"
              [choices]="siteDropdownChoices"
              selector="Select One"
              additionalIconClasses="sprk-c-Icon--l sprk-c-Icon--current-color sprk-Stack__item"
              additionalTriggerTextClasses="sprk-o-Stack__item sprk-o-Stack__item--flex@xxs"
            >
              <div
                class="sprk-c-Dropdown__footer sprk-u-TextAlign--center"
                sprkDropdownFooter
              >
                <a
                  class="sprk-c-Button sprk-c-Button--compact sprk-c-Button--tertiary"
                  href="#nogo"
                >
                  Placeholder
                </a>
              </div>
            </sprk-dropdown>
          </div>
        </div>

        <ul
          utility-slot
          class="sprk-o-Stack__item sprk-o-HorizontalList sprk-o-HorizontalList--spacing-medium sprk-o-Stack--center-column"
        >
          <li>
            <a
              class="sprk-b-Link sprk-b-Link--plain sprk-c-Masthead__link"
              href="#nogo"
            >
              Talk To Us
            </a>
          </li>

          <li>
            <a
              class="sprk-b-Link sprk-b-Link--plain sprk-c-Masthead__link"
              routerLink="/cards"
              href="#nogo"
            >
              <sprk-icon
                iconType="settings"
                additionalClasses="sprk-c-Icon--l sprk-c-Icon--current-color"
              ></sprk-icon>
              <span class="sprk-u-ScreenReaderText">Settings</span>
            </a>
          </li>

          <li>
            <sprk-dropdown
              [choices]="simpleChoices"
              dropdownType="simple"
              title="My Account"
              triggerIconType="user"
              additionalTriggerClasses="sprk-b-Link--plain sprk-c-Masthead__link"
              additionalIconClasses="sprk-c-Icon--l"
              additionalClasses="sprk-u-Right--zero"
              screenReaderText="User Account"
            ></sprk-dropdown>
          </li>
        </ul>

        <div class="sprk-u-mas" narrowNavFooter>
          <a
            class="sprk-c-Button sprk-c-Button--secondary sprk-c-Button--compact sprk-c-Button--full@sm"
            href="#nogo"
            >Sign In</a
          >
        </div>
      </sprk-masthead>
    </div>

    <div class="drizzle-o-ContentGrouping drizzle-c-Preview">
      <h2 class="drizzle-b-h2">Masthead (default)</h2>
      <sprk-masthead
        additionalClasses="angular-docs-u-Masthead-docs"
        [narrowNavLinks]="defaultNarrowLinks"
        idString="masthead-1"
      >
        <svg
          logo-slot
          class="sprk-c-Masthead__logo"
          width="250"
          viewBox="0 0 300 83"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none">
            <path
              d="m73.4305835 75.8450704 16.056338-28.0080483c2.3541248-4.1348088 2.3541248-9.2354124-.0301811-13.3400402l-4.4969818-7.7565392-11.1971831 19.2555332c.5734406 6.307847-2.8973844 12.2837022-8.6619719 14.9094567l-12.5855131 21.6700201 9.386318-.0301811c4.7384305-.0301811 9.1448692-2.5653923 11.529175-6.7002012z"
              fill="#ff451a"
            />
            <g fill="#000">
              <path
                d="m129.657948 49.7082495h-25.684105c-.754527 0-1.478873-.3018109-2.022133-.8450704-.543259-.5432596-.84507-1.2676057-.84507-2.0221328 0-.7545272.301811-1.4788733.84507-2.0221328.54326-.5432596 1.267606-.8450704 2.022133-.8450704h25.714286c3.802817 0 6.971831-2.9879276 7.062374-6.7605634.030181-1.8712274-.663984-3.6820926-1.961771-5.0100604-1.297786-1.3279678-3.108652-2.082495-4.979879-2.082495h-17.565392c-6.971831 0-12.7364187-5.5533199-12.826962-12.5251509-.0301811-3.3802816 1.297787-6.639839 3.682093-9.02414483 2.384305-2.41448692 5.613682-3.74245473 8.993963-3.74245473h25.623743c1.569416 0 2.867203 1.26760564 2.867203 2.86720322 0 .75452717-.301811 1.47887324-.84507 2.0221328-.54326.54325954-1.267606.84507044-2.022133.84507044h-25.503018c-3.802817 0-6.971831 2.9879275-7.062375 6.7605634-.060362 1.8712273.663984 3.6820925 1.961771 5.0100603s3.108652 2.082495 4.979879 2.082495h17.746479c3.380282 0 6.609658 1.3581489 8.993964 3.7424547 2.384306 2.3843059 3.712274 5.6438632 3.682093 9.0241449-.090544 6.971831-5.885312 12.5251509-12.857143 12.5251509z"
              />
              <path
                d="m170.885312 4.64788732h-21.881288v42.28370218c-.030181 1.0563381.513079 2.0523139 1.418511 2.5653924.905433.5130785 2.022133.5432595 2.927566 0 .905432-.5432596 1.448692-1.5392354 1.418511-2.5653924v-36.5191147h16.267605c3.953723.0301811 7.152918 3.1690141 7.243461 7.1227365.030181 1.9315895-.724346 3.7726358-2.082495 5.1307847-1.38833 1.418511-3.319919 2.2334004-5.311871 2.2334004h-8.480885c-1.569417.0603622-2.806841 1.3279678-2.806841 2.8973843s1.237424 2.8370221 2.806841 2.8973843h8.601609c3.470825 0 6.790745-1.38833 9.235413-3.8631791s3.802817-5.7947686 3.772636-9.2655935c0-7.1227365-5.915493-12.91750508-13.128773-12.91750508z"
              />
              <path
                d="m261.126761 44.9094567-13.8833-14.2152917h1.720322c3.470825 0 6.790744-1.38833 9.235412-3.8631791s3.802817-5.8249497 3.772636-9.2957746c-.060362-7.1227365-5.975855-12.88732398-13.189135-12.88732398h-21.881288v42.28370218c-.030181 1.0563381.513079 2.0523139 1.418512 2.5653924.905432.5432595 2.022132.5432595 2.927565 0 .905433-.5432596 1.448692-1.5392354 1.418511-2.5653924v-36.5191147h16.267606c3.953722.0301811 7.152917 3.1690141 7.24346 7.1227365.030181 1.9315895-.724346 3.7726358-2.082495 5.1307847-1.38833 1.418511-3.319919 2.2334004-5.311871 2.2334004h-8.148893c-1.297787-.1509055-2.565393.6036217-3.04829 1.8410463-.482897 1.2374245-.060362 2.6257545.995976 3.4104627l18.380282 18.832998c1.146881.9657948 2.837022.9054326 3.89336-.1509054 1.146881-1.0865191 1.237424-2.77666.27163-3.9235413z"
              />
              <path
                d="m299.034205 45.2414487-16.38833-19.7987928 14.336016-15.93561365c1.056338-1.17706237.965795-3.01810865-.211267-4.07444668-1.177063-1.05633802-3.018109-.96579477-4.074447.21126761l-20.251509 22.57545272v-20.8249497c.030181-1.05633803-.513078-2.05231389-1.418511-2.56539236-.905433-.54325955-2.022133-.54325955-2.927565 0-.905433.54325956-1.448693 1.53923542-1.418512 2.56539236v39.5372233c-.030181 1.0563381.513079 2.0523139 1.418512 2.5653924.905432.5432595 2.022132.5432595 2.927565 0 .905433-.5432596 1.448692-1.5392354 1.418511-2.5653924v-10.0503018l6.338028-7.0623742 15.845071 19.1348088c.482897.6036218 1.177062.9657948 1.96177 1.026157h.27163c1.1167 0 2.142857-.6639839 2.595573-1.6599598.452717-1.0261569.301811-2.2032193-.422535-3.0784708z"
              />
              <path
                d="m221.076459 46.1770624-17.20322-39.20523141c-.694165-1.59959759-2.293762-2.62575453-4.044265-2.62575453s-3.350101 1.02615694-4.044266 2.62575453l-17.203219 39.20523141c-.633803 1.4486921.030181 3.1086519 1.478873 3.7424547s3.108652-.0301811 3.742455-1.4486922l16.026157-36.5191146 5.643863 12.8571428h-5.704225c-1.65996 0-3.018109 1.3581489-3.018109 3.0181087 0 1.6599597 1.358149 3.0181086 3.018109 3.0181086h8.360161l7.726358 17.6257545c.663984 1.38833 2.323943 2.0221328 3.712273 1.38833 1.448693-.6338028 2.112676-2.2635815 1.509055-3.6820925z"
              />
              <path
                d="m105.84507 58.7022133c5.945674 0 9.235413 3.6820925 9.235413 9.7183098s-3.289739 9.748491-9.235413 9.748491h-6.3983899v-19.4668008zm-4.557344 17.806841h4.466801c4.768612 0 7.454729-3.0181086 7.454729-8.0583501 0-5.0402414-2.716298-8.0583501-7.454729-8.0583501h-4.466801z"
              />
              <path
                d="m129.959759 78.1690141h-11.770624v-19.4668008h11.770624v1.6599597h-9.929578v7.0020121h9.416499v1.6599598h-9.416499v7.4849094h9.929578z"
              />
              <path
                d="m134.15493 73.1287726c.241448 2.2334004 2.474849 3.7726359 5.462776 3.7726359 2.927566 0 5.010061-1.6297787 5.010061-3.802817 0-1.8410462-1.327968-3.0181086-4.346077-3.7726358l-2.2334-.5734406c-3.651912-.9054326-5.191147-2.444668-5.191147-5.0704225 0-3.138833 2.716298-5.4024145 6.67002-5.4024145 3.712274 0 6.488934 2.2032193 6.67002 5.1609658h-1.871227c-.301811-2.082495-2.173038-3.470825-4.859155-3.470825-2.806841 0-4.738431 1.5392354-4.738431 3.6519115 0 1.6901408 1.207244 2.6861167 4.16499 3.4406438l1.93159.4828974c4.014084.9959759 5.674044 2.5955735 5.674044 5.3420523 0 3.4104628-2.806841 5.6740443-7.062374 5.6740443-4.014085 0-6.911469-2.2032193-7.152918-5.4627767z"
              />
              <path
                d="m149.45674 78.1690141v-19.4668008h1.871228v19.4668008z"
              />
              <path
                d="m163.158954 78.5915493c-5.28169 0-8.722334-4.0140845-8.722334-10.1408451 0-6.1267605 3.440644-10.140845 8.692153-10.140845 4.16499 0 7.273641 2.3843058 7.967806 6.0965794h-1.871227c-.814889-2.7766599-3.018109-4.3762575-6.096579-4.3762575-4.104628 0-6.790745 3.3199195-6.790745 8.4205231s2.686117 8.4507043 6.820926 8.4507043c3.832998 0 6.277666-2.414487 6.277666-6.0965795v-.6639839h-5.945674v-1.6599598h7.78672v2.1730382c0 4.7987928-3.199195 7.9376258-8.118712 7.9376258z"
              />
              <path
                d="m174.44668 78.1690141v-19.4668008h1.810865l11.348089 16.1770624h.181086v-16.1770624h1.810866v19.4668008h-1.810866l-11.378269-16.1770624h-.181087v16.1770624z"
              />
              <path
                d="m200.794769 73.1287726c.241448 2.2334004 2.474849 3.7726359 5.462776 3.7726359 2.927566 0 5.010061-1.6297787 5.010061-3.802817 0-1.8410462-1.327968-3.0181086-4.346077-3.7726358l-2.2334-.5734406c-3.651912-.9054326-5.191147-2.444668-5.191147-5.0704225 0-3.138833 2.716298-5.4024145 6.67002-5.4024145 3.742455 0 6.488934 2.2032193 6.67002 5.1609658h-1.871227c-.301811-2.082495-2.173038-3.470825-4.889336-3.470825-2.806841 0-4.70825 1.5392354-4.70825 3.6519115 0 1.6901408 1.207244 2.6861167 4.16499 3.4406438l1.93159.4828974c4.014084.9959759 5.674044 2.5955735 5.674044 5.3420523 0 3.4104628-2.806841 5.6740443-7.062374 5.6740443-4.014085 0-6.94165-2.2032193-7.152918-5.4627767z"
              />
              <path
                d="m221.348089 78.1690141v-8.4205232l-7.002013-11.0462776h2.112677l5.704225 9.1750503h.181086l5.704226-9.1750503h2.112676l-6.971831 11.0462776v8.4205232z"
              />
              <path
                d="m233.209256 73.1287726c.241448 2.2334004 2.474849 3.7726359 5.462776 3.7726359 2.927566 0 5.010061-1.6297787 5.010061-3.802817 0-1.8410462-1.327968-3.0181086-4.346077-3.7726358l-2.2334-.5734406c-3.651912-.9054326-5.191147-2.444668-5.191147-5.0704225 0-3.138833 2.716298-5.4024145 6.67002-5.4024145 3.712274 0 6.488934 2.2032193 6.67002 5.1609658h-1.871227c-.301811-2.082495-2.173039-3.470825-4.859155-3.470825-2.806841 0-4.738431 1.5392354-4.738431 3.6519115 0 1.6901408 1.207244 2.6861167 4.16499 3.4406438l1.93159.4828974c4.014084.9959759 5.674044 2.5955735 5.674044 5.3420523 0 3.4104628-2.806841 5.6740443-7.062374 5.6740443-4.014085 0-6.94165-2.2032193-7.152918-5.4627767z"
              />
              <path
                d="m253.732394 78.1690141v-17.8068411h-6.519114v-1.6599597h14.909456v1.6599597h-6.549295v17.8068411z"
              />
              <path
                d="m276.458753 78.1690141h-11.770624v-19.4668008h11.770624v1.6599597h-9.899397v7.0020121h9.416499v1.6599598h-9.416499v7.4849094h9.899397z"
              />
              <path
                d="m279.748491 78.1690141v-19.4668008h2.112676l7.183099 16.9617706h.181086l7.152918-16.9617706h2.142857v19.4668008h-1.720322v-15.8752515h-.150906l-6.730382 15.7847082h-1.599597l-6.730383-15.7847082h-.120724v15.8752515z"
              />
            </g>
            <path
              d="m65.0704225 60.9356137c-.0301811.0301811-.0905432.0603622-.1207243.0603622l-27.7062374 12.6760563-5.221328 8.9637827 20.4627767-.0603622z"
              fill="#ff5c1c"
            />
            <path
              d="m74.0945674 10.2615694-13.0080483 22.3641851c6.8209256.9657948 12.0724346 6.5191147 12.6458753 13.4004024l11.1971831-19.2555332-9.0241449-15.5130784c-.362173-.6639839-1.056338-1.026157-1.8108652-.9959759z"
              fill="#ff5c1c"
            />
            <path
              d="m36.3078471 74.0945674-9.8390342 4.4969819c-.7847083.362173-1.2676057 1.2072435-1.1468813 2.0523139.1207243.8450704.7545272 1.5694165 1.5995976 1.7203219.8752515.1810865 1.750503.2716298 2.6257545.2716298h.0301811 2.444668l5.221328-8.9637827z"
              fill="#ff721e"
            />
            <path
              d="m61.0865191 32.6257545 13.0080483-22.3641851c-.2414487 0-.4828974.0603622-.7243461.1810865l-6.1871227 2.7464789-20.4929578 9.0845071-11.0764587 19.0442655 16.9919517-7.5754527c2.6559356-1.1770623 5.6136821-1.5694165 8.4808853-1.1167002z"
              fill="#ff721e"
            />
            <path
              d="m29.9396378 29.6981891c-3.2595573 1.4486922-4.7987927 5.2515091-3.4708249 8.4507043.6639839 1.5995975 1.9617706 2.8672032 3.5915493 3.5311871 1.6297786.6338028 3.4406438.6036217 5.0100603-.0905433l.5432596-.2414487 11.0764587-19.0744466z"
              fill="#ff8920"
            />
            <path
              d="m64.7686117 44.7887324c-.6639839-1.5995976-1.9617707-2.8672032-3.5915493-3.5311871-1.6297787-.6338028-3.4406439-.6036218-5.0100604.0905432l-.2112676.0905433-11.0764587 19.0744467 16.418511-7.2736419c3.2595574-1.4486921 4.8289739-5.2213279 3.470825-8.4507042z"
              fill="#ff5c1c"
            />
            <path
              d="m30.3923541 50.3420523-12.9476861 22.303823c.1509054-.0301811.3018109-.0603622.4225352-.1207244l6.1871228-2.7464789 20.8551307-9.2354124 11.0764588-19.0744467-17.3541248 7.7263581c-2.5955734 1.1468813-5.4627766 1.5392354-8.2394366 1.1468813z"
              fill="#ff721e"
            />
            <path
              d="m54.9295775 8.84305835 9.8390342-4.49698189c.8148893-.36217304 1.2676056-1.20724346 1.1770623-2.08249497-.0905432-.87525151-.7545271-1.5694165-1.6297786-1.72032193-.8752515-.18108652-1.750503-.27162978-2.6257546-.27162978h-.030181-2.2032194l-5.1307847 8.81287726z"
              fill="#ff721e"
            />
            <path
              d="m18.7726358 41.8309859c-.6338028-1.4185111-1.056338-2.9275654-1.2374245-4.4969819l-11.10663987 19.1046278 8.87323947 15.2716298c.4225352.724346 1.2676056 1.1167002 2.112676.9356137l12.9778672-22.303823c-5.0704225-.6639839-9.4466801-3.8631791-11.6197183-8.5110664z"
              fill="#ff8920"
            />
            <path
              d="m26.5291751 21.8209256 27.8269617-12.70623747 5.1006036-8.81287726-20.4627766.06036217z"
              fill="#ff8920"
            />
            <path
              d="m18.3802817 30.331992c1.38833-3.7424548 4.2555332-6.7605634 7.9074447-8.3903421l.2414487-.0905433 12.4647887-21.45875247h-9.6277666c-4.7686117.03018108-9.1750503 2.56539235-11.5593562 6.7002012l-16.05633798 28.00804827c-2.35412475 4.1348089-2.32394366 9.2354125.06036217 13.3400403l4.61770624 7.9678068 11.10663987-19.1046278c-.3018109-2.3541247 0-4.7384305.8450704-6.9718309z"
              fill="#ffa022"
            />
          </g>
        </svg>

        <div
          class="sprk-o-Stack__item sprk-o-Stack__item--flex@xxs sprk-o-Stack sprk-o-Stack--misc-a sprk-o-Stack--split@xxs sprk-o-Stack--end-row"
          little-nav-slot
        >
          <ul
            class="sprk-c-Masthead__site-links sprk-o-Stack__item sprk-o-HorizontalList sprk-o-HorizontalList--spacing-large sprk-o-Stack__item--center-column"
          >
            <li>
              <a
                class="sprk-b-Link sprk-b-Link--plain sprk-c-Masthead__link"
                href="#nogo"
              >
                Item 1
              </a>
            </li>

            <li>
              <a
                class="sprk-b-Link sprk-b-Link--plain sprk-c-Masthead__link"
                href="#nogo"
              >
                Item 2
              </a>
            </li>
          </ul>
        </div>
        <ul
          class="sprk-o-Stack__item sprk-o-HorizontalList sprk-o-HorizontalList--spacing-large sprk-o-Stack--center-column"
          utility-slot
        >
          <li>
            <a
              class="sprk-b-Link sprk-b-Link--plain sprk-c-Masthead__link"
              href="tel:555-555-5555"
            >
              (555) 555-5555
            </a>
          </li>

          <li>
            <a
              class="sprk-b-Link sprk-b-Link--plain sprk-c-Masthead__link"
              href="#nogo"
            >
              Talk To Us
            </a>
          </li>

          <li>
            <a
              class="sprk-c-Button sprk-c-Button--secondary sprk-c-Button--compact"
              href="#nogo"
            >
              Sign In
            </a>
          </li>
        </ul>
        <div class="sprk-u-mas" narrowNavFooter>
          <a
            class="sprk-c-Button sprk-c-Button--secondary sprk-c-Button--compact sprk-c-Button--full@sm"
            href="#nogo"
            >Sign In</a
          >
        </div>
      </sprk-masthead>
    </div>
  `,
  styles: [``]
})
export class MastheadDocsComponent {
  links = [
    {
      text: 'Navigation Item',
      href: '/icons',
      active: false
    },
    {
      text: 'Your Item',
      active: false,
      subNav: [
        {
          text: 'Item 1',
          href: '/links'
        },
        {
          text: 'Item 2',
          href: '#nogo'
        },
        {
          text: 'Item 3',
          href: '#nogo'
        }
      ]
    },
    {
      text: 'Nav Item',
      href: '#nogo',
      active: false,
      leadingIcon: 'settings'
    },
    {
      text: 'Navigation Item',
      href: '#nogo',
      leadingIcon: 'chat-online',
      subNav: [
        {
          text: 'Item 1',
          href: '#nogo'
        },
        {
          text: 'Item 2',
          href: '#nogo'
        },
        {
          text: 'Item 3',
          href: '#nogo'
        }
      ]
    },
    {
      text: 'Item',
      href: '#nogo',
      active: false,
      leadingIcon: 'chat-online'
    }
  ];

  defaultNarrowLinks = [
    {
      text: 'Item 1',
      href: '#nogo',
      subNav: [
        {
          text: 'Item 1',
          href: '/links'
        },
        {
          text: 'Item 2',
          href: '/links'
        },
        {
          text: 'Item 3',
          href: '/links'
        }
      ]
    },
    {
      text: 'Item 2',
      href: '#nogo',
      active: true
    },
    {
      text: 'Item 3',
      href: '#nogo',
      subNav: [
        {
          text: 'Item 1',
          href: '/links'
        },
        {
          text: 'Item 2',
          href: '/links'
        },
        {
          text: 'Item 3',
          href: '/links'
        }
      ]
    },
    {
      text: 'Item 4',
      href: '#nogo'
    },
    {
      text: 'Item 5',
      href: '#nogo'
    },
    {
      text: '(586) 123-4567',
      href: '#nogo',
      active: false,
      leadingIcon: 'landline'
    },
    {
      text: 'Talk To Us',
      href: '#nogo',
      active: false,
      leadingIcon: 'call-team-member'
    },
    {
      text: 'Settings',
      href: '#nogo',
      active: false,
      leadingIcon: 'settings'
    },
    {
      text: 'My Account',
      href: '#nogo',
      active: false,
      leadingIcon: 'user',
      subNav: [
        {
          text: 'Change Username',
          href: '/links'
        },
        {
          text: 'Change Password',
          href: '#nogo'
        },
        {
          text: 'Sign Out',
          href: '#nogo'
        }
      ]
    }
  ];

  narrowLinks = [
    {
      text: 'Item 1',
      href: '#nogo',
      subNav: [
        {
          text: 'Item 1',
          href: '/links'
        },
        {
          text: 'Item 2',
          href: '/links'
        },
        {
          text: 'Item 3',
          href: '/links'
        }
      ]
    },
    {
      text: 'Item 2',
      href: '#nogo',
      active: true
    },
    {
      text: '(555) 555-5555',
      href: '#nogo',
      active: false,
      leadingIcon: 'landline'
    },
    {
      text: 'Talk To Us',
      href: '#nogo',
      active: false,
      leadingIcon: 'call-team-member'
    }
  ];

  siteDropdownChoices = [
    {
      content: {
        title: 'Choice Title',
        infoLine1: 'Information about this choice',
        infoLine2: 'More Information'
      },
      value: 'Choice Title 1',
      active: false
    },
    {
      content: {
        title: 'Choice Title',
        infoLine1: 'Information about this choice',
        infoLine2: 'More Information'
      },
      value: 'Choice Title 2',
      active: true
    }
  ];

  simpleChoices = [
    {
      text: 'Change Username',
      value: 'change-username'
    },
    {
      text: 'Change Password',
      value: 'change-password'
    },
    {
      text: 'Sign Out',
      value: 'sign-out'
    }
  ];

  mySelector = {
    trigger: {
      text: 'My Selector'
    },
    choices: [
      {
        content: {
          title: 'Choice Title',
          infoLine1: 'Information about this choice',
          infoLine2: 'More Information'
        },
        value: 'Choice Title 1',
        active: false
      },
      {
        content: {
          title: 'Choice Title',
          infoLine1: 'Information about this choice',
          infoLine2: 'More Information'
        },
        value: 'Choice Title 2',
        active: true
      }
    ]
  };

  constructor() {}
}
