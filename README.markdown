A jQuery transliteration plugin
===============================

`jquery.transliterate.js`
-------------------------

Pat Hall pat@fileslip.net

MIT License

Thanks:

* l4rk on #jquery
* Fernandos on #jquery

I know this documentation isn't practical yet; I'm working on it.
-----------------------------------------------------------------

Demo
----

See <a href="http://www.fileslip.net/projects/transliterate">an in-progress demo</a>.

Installing
----------

1. Build a transliteration scheme (more on this soon)
2. Convert transliteration into a .js array
3. Include `jquery.transliterate.js`
4. Include `x-your-scheme.js` (more on a possible naming convention soon)
5. Run something like:

    $('input').transliterate(some_scheme)


What is Transliteration?
------------------------

Transliteration is the process of converting one writing system into another. (Note that it has nothing to do with translation.)

Why is it so hard for people to type in non-roman scripts on the web? Why do even linguists avoid producing copy in Unicode? Here’s why: it’s hard. It’s too hard. It’s not cross-platform, it’s not easy to know if the right fonts are available, and as a result it becomes difficult to learn to type in anything but ASCII (or whatever the local vernacular script is). This has to change; and in my opinion the best approach is to handle it with Javascript and font embedding. It would then become possible to tell learners that they can produce copy in their writing system “at” a certain website. People understand that. And for people who produce websites, it should be as simple as including a Javascript keyboard for whatever the target language is.

So for instance, one can transliterate  “Ruby” (as in the programming language) into various writing systems:

* Korean Hangul: 루비
* Cyrillic (Russian style, in this case): Рубин (hmm, why is there an ‘n’?)
* Georgian: რუბი
* Japanese Katakana: ルビー

However, transliteration can serve a variety of purposes. For instance, sometimes it can be used to ease the process of inputting unusual characters. An example of this approach is in use on the
Esperanto Wikipedia. Esperanto has a few unusual letters which are capped by a circumflex. Circumflexes are common enough, but Esperanto is rather unusual in setting them atop _c_, _g_, _h_ and o
thers.

Needless to say it’s not obvious how to type ĉ ĝ ĥ ĵ ŝ and so forth. So the Esperanto Wikipedia came up with a solution that uses transliteration: to get ĉ, you write ‘cx’ (and so forth). This wo
rks because ‘cx’ doesn’t occur in Esperanto. So we have these rules:

* cx → ĉ
* gx → ĝ
* hx → ĥ
* jx → ĵ
* sx → ŝ
* ux → ŭ
* CX → Ĉ
* GX → Ĝ
* HX → Ĥ
* JX → Ĵ
* SX → Ŝ
* UX → Ŭ
* Cx → Ĉ
* Gx → Ĝ
* Hx → Ĥ
* Jx → Ĵ
* Sx → Ŝ
* Ux → Ŭ

Other, more complicated transliteration systems are also possible. For instance, here's a demo that transliterates Romaji into Katakana. So, if you type "toyota", you get トヨタ (try it out here: <a title="Katakana transliteration widget" href="http://ruphus.com/stash/katakana.html">Katakana</a>).

We think it'd be worth really trying to generalize this problem in such a way that people can define transliteration schemes, and how they want to apply them in a web application.
