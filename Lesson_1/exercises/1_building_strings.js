/*

The intention of the program below is to output a paragraph. Copy and paste the
program into a JavaScript console (e.g., from the Chrome Developer Tools), then
run it. Is the output what you expected? Are there any bugs/errors?

*/

// const paragraph = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed \
//                 ligula at risus vulputate faucibus. Aliquam venenatis nibh ut justo dignissim \
//                 dignissim. Proin dictum purus mollis diam auctor sollicitudin. Ut in bibendum \
//                 ligula. Suspendisse quam ante, dictum aliquam tristique id, porttitor pulvinar \
//                 diam. Maecenas blandit aliquet ipsum. Integer vitae sapien sed nulla rutrum \   
//                 hendrerit ac a urna. Interdum et malesuada fames ac ante ipsum primis in faucibus.';

// console.log(paragraph);

/*

Solution:

When running this code, we're met with a SyntaxError: invalid or unexpected
token.

This issue seems to stem from whitespace that commes after one of the `\`
characters; there are 3 whitespace characters after the fifth `\` character.
Once those are removed, the code runs but still provides a result that may be
unexpected -- there are some senetences that are broken up by a large series of
space characters. When using the `\` to concatenate multiple lines of strings,
we must be careful of the space characters that are added the `\`. Any space
added after that will be considered apart of the string.

*/