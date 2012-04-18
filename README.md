jQuery Credit Card Type Detector Plugin
=======================================

Detail: https://github.com/christianreed/Credit-Card-Type-Detector

Determines possible credit card types as a user types their credit card number.

Intended use is that you start with all possible card logos that you accept and 
gradually gray them out as the number excludes certain brands of cards. Helps give 
the user the impression that you know what you're doing and improve conversion.

Designed to work with the cards accepted by [Stripe](http://stripe.com), but could
extended to work with additional card types. Currently detects Visa, Mastercard,
American Express, Diners Club, Discover, and JCB.

Graying the logos in and out is done with CSS classes. As the input changes, "on"
and "off" classes are added to the card logo elements indicating whether that
particular card type is possible.

Included is a transparent png file with various card types, some css, and a
possible HTML structure. So pretty much cut and paste, but you could certainly
build your own structure.

Basic Use:
----------

    $('#credit_card_input_field').creditCardTypeDetector({
        'credit_card_logos_id' : '#card_logos_ele'
    });

By default no arguments are required, it looks for the logos inside the element
with the ".card_logos" class.