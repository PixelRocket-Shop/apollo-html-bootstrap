(function () {

    const cssVariableBreakpointLG = getComputedStyle(document.documentElement).getPropertyValue('--theme-breakpoint-xl') || '1140px';
    const breakpoint = window.matchMedia(`(max-width: ${cssVariableBreakpointLG})`);
    const CLOSED_STATE_CSS_CLASS = 'menu-hidden';
    const OVERLAY_STATE_CSS_CLASS = 'menu-overlay';
    const COLLAPSED_STATE_CSS_CLASS = 'menu-collapsed';
    const TRANSITION_CSS_CLASS = 'has-transition';
    const CSS_ANIMATION_DURATION = 500;
    const menuToggle = document.querySelector('.menu-toggle');
    const menuOverlay = document.querySelector('.menu-overlay-bg');
    const closeMenuBtn = document.querySelector('.close-menu');

    // Check if sidebar should be open or closed
    function checkIfCloseSidebar() {
        const breakpointWidth = parseInt(cssVariableBreakpointLG) || 1140;

        return window.innerWidth > breakpointWidth;
    }

    // Open or close sidebar
    function sidebarContractExpand() {
        document.body.classList.remove(COLLAPSED_STATE_CSS_CLASS);

        if (checkIfCloseSidebar()) {
            document.body.classList.remove(CLOSED_STATE_CSS_CLASS);
            return;
        } 
        document.body.classList.add(CLOSED_STATE_CSS_CLASS);
        document.body.classList.remove(OVERLAY_STATE_CSS_CLASS);
        document.body.classList.remove(TRANSITION_CSS_CLASS);
    }

    function addTempBodyTransitionCSSClass() {
        document.body.classList.add(TRANSITION_CSS_CLASS);

        setTimeout(() => {
            document.body.classList.remove(TRANSITION_CSS_CLASS);
        }, CSS_ANIMATION_DURATION);
    }

    // handle menu toggle clicks
    function handleMenuToggleClick() {
        addTempBodyTransitionCSSClass();

        if (!checkIfCloseSidebar()) {
            document.body.classList.toggle(OVERLAY_STATE_CSS_CLASS);
            return;
        }
        
        document.body.classList.toggle(COLLAPSED_STATE_CSS_CLASS);
    }

    function closeSidebar() {
        addTempBodyTransitionCSSClass();
        document.body.classList.remove(OVERLAY_STATE_CSS_CLASS);
    }


    // Monitor our breakpoint for changes to device width
    breakpoint.addListener(sidebarContractExpand);

    // add eventlistener for menu toggle & overlay & close menu btn
    if (menuToggle) {
        menuToggle.addEventListener('click', handleMenuToggleClick);
    }
    
    if (menuOverlay) {
        menuOverlay.addEventListener('click', () => {
            closeSidebar();
        });
    }

    if (closeMenuBtn) {
        closeMenuBtn.addEventListener('click', () => {
            closeSidebar();
        });
    }


    document.addEventListener('DOMContentLoaded', function() {

        // on page load, check if sidebar should be closed
        sidebarContractExpand();

    });

})();