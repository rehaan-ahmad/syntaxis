1. Change expected particiapnt count to 500-700 wherever mentioned.
2. Change every banner size to 16:9 landscape. Make Genesis Track banner 4:3. Profile images of all Speakers, Organizing Team must be in 1:1 ratio.
3. Remove the Sponsorship Tier Packages listings. Simply Keep the Grid, with only Archimedes (Title Partner) and Euclid (Co-Sponsor) Tiers. They have 1 and 2 slots respectively, hence adjust the grid accordingly. Remove the associate partners from the list.
4. Add a scroll to top button which shows once the user enters the "About" section.
5. In the footnote, remover GeeksforGeeks Student Community part. Moreover, remove GeeksfroGeeks Student Community form every possible location.
6. Add beautiful custom 404 pages suitable to the site's themes.
7. Bundle these events as one, not separate entries:
    a. Hureka, Agon adn Katharsis are bundled as the Contest Package.
    b. Sundesis and Logika are bundled as Workshop packages.
    c. Archithon, Pythia Expo and Tribunal are bundeled as Hackathon package.
    d. Pythia Expo and Tribunal is open for any existing participant to attend for viewing.
    e. Genesis track has one main event, Eureka Pitch, which is of two rounds, first one on Day 2 and Final on Day 3.

8. In the lunch breaks, there isn't any meal provided by the management, but available for purchase from vendors available in the event.
9. All tech events strictly follow Bring You Own Device policy. Wifi, Charging points, etc. will be provided by the management.

10. For the "Get In Touch" section, I want you to gracefully reroute to this tally form when the user click "Get In Touch" button: <https://tally.so/r/ZjBZro>
    a. Moreover, here's the method to embed the form's pop-up in the site:
To open a Tally popup, paste the following code snippet in the <head> section of your website.

<script async src="https://tally.so/widgets/embed.js"></script>
Then to open the popup on clicking a button, you need to add the following data-tally attributes to an existing button on your page. You can add these attributes to any clickable element - button, div, etc.
// Data attributes
data-tally-open="ZjBZro" data-tally-width="425" data-tally-hide-title="1" data-tally-emoji-text="👋" data-tally-emoji-animation="wave" data-tally-auto-close="2500"

// Example
<button data-tally-open="ZjBZro" data-tally-width="425" data-tally-hide-title="1" data-tally-emoji-text="👋" data-tally-emoji-animation="wave" data-tally-auto-close="2500">Click me</button>
Alternatively, you can open the popup by clicking on a link with a custom URL hash. Add the URL below to a link on your page to open the popup.
// Link href attribute

# tally-open=ZjBZro&tally-width=425&tally-hide-title=1&tally-emoji-text=👋&tally-emoji-animation=wave&tally-auto-close=2500

// Example
<a href="#tally-open=ZjBZro&tally-width=425&tally-hide-title=1&tally-emoji-text=👋&tally-emoji-animation=wave&tally-auto-close=2500">Click me</a>
Save website page and query parameters
Your website's page and all query parameters will be automatically forwarded to the Tally popup and could be saved using hidden fields. For example, if your page's URL looks like the one below and you have hidden fields for originPage, ref and email, you will see originPage=/register, ref=downloads and email=<alice@example.com> in your form submissions.
<https://company.com/register?ref=downloads&email=alice@example.com>
If you are opening the popup on button click via data attributes, all data attributes will be automatically forwarded to the popup. The example below sets 2 data attributes which can be used as hidden fields: ref and email.
<button data-tally-open="ZjBZro" data-ref="downloads" data-email="alice@example.com">Click me</button>
If you are opening the popup on button click via custom URL hash, all URL parameters will be automatically forwarded to the popup. The example below sets 2 parameters which can be used as hidden fields: ref and email.
<a href="#tally-open=ZjBZro&ref=downloads&email=alice@example.com">Click me</a>
Use JavaScript
You can open and close popups using JavaScript via the window.Tally object. It comes in handy when you want to define your own business logic on when to open a certain popup. Take a look at the instructions below and share them with your developers.
// Include the Tally widget script in the <head> section of your page
<script src="https://tally.so/widgets/embed.js"></script>

// You can find the form ID in the URL of this page
// <https://tally.so/forms/ZjBZro/share>
const formId = 'ZjBZro';

// Open the popup
Tally.openPopup(formId, options);

// Available options
type PopupOptions = {
  key?: string;
  layout?: 'default' | 'modal';
  width?: number;
  alignLeft?: boolean;
  hideTitle?: boolean;
  overlay?: boolean;
  emoji?: {
    text: string;
    animation: 'none' | 'wave' | 'tada' | 'heart-beat' | 'spin' | 'flash' | 'bounce' | 'rubber-band' | 'head-shake';
  };
  autoClose?: number;
  showOnce?: boolean;
  doNotShowAfterSubmit?: boolean;
  customFormUrl?: string;
  hiddenFields?: {
    [key: string]: any,
  };
  onOpen?: () => void;
  onClose?: () => void;
  onPageView?: (page: number) => void;
  onSubmit?: (payload: any) => void;
};

// Example: open a popup with default options
Tally.openPopup('ZjBZro');

// Example: opening a popup as a centered modal
Tally.openPopup('ZjBZro', {
  layout: 'modal', // Open as a centered modal
  width: 700, // Set the width of the modal
  autoClose: 5000, // Close the popup 5 seconds after form was submitted (in ms)
});

// Example: set custom hidden fields
Tally.openPopup('ZjBZro', {
  hiddenFields: {
    ref: 'downloads',
    email: '<alice@example.com>'
  }
});

// Example: customization via custom domain URL + code injection
Tally.openPopup('ZjBZro', {
  customFormUrl: '<https://yourdomain.com/form>',
});

// Example: use callback functions to handle events
Tally.openPopup('ZjBZro', {
  onOpen: () => {
    // The popup was opened, mark the form as seen
    // ...
  },
  onClose: () => {
    // The popup was closed
    // ...
  },
  onPageView: (page: number) => {
    // Log the page view
    // ...
  },
  onSubmit: (payload: any) => {
    // Form was submitted, use the answers payload in your application
    // ...
  }
});

// Close the popup
Tally.closePopup('ZjBZro');

    Make sure that the user is redirected if the popup fails. Implement the pop-up first.
    
    
    

