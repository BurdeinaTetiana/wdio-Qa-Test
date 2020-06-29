describe('Main Page', () => {

    it('should Title maine page is present and correct text', function () {
        browser.url('https://stage.pasv.us/');
        const titleProgressMonitor = "//span[@id='site-name']";
        const text = $(titleProgressMonitor).getText();
        expect(text).toEqual('Progress Monitor');
    });

    it('should Title maine page is clickable', function () {
        const titleProgressMonitor = "//span[@id='site-name']";
        const result = $(titleProgressMonitor).isClickable();
        expect(result).toEqual(true);
    });

    it('should Login button is clickable', function () {
        const loginButton = "//a[@qa='login-link']";
        const result = $(loginButton).isClickable();
        expect(result).toEqual(true);
    });

    it('should Text is present in login button', function () {
        const loginButton = "//a[@qa='login-link']";
        const textLoginButton = $(loginButton).getText();
        expect(textLoginButton).toEqual('Login');
    });



})