const paperModal = document.getElementById('paperModal');
const closePaper = document.getElementById('closePaper');
const closePaperBackdrop = document.getElementById('closePaperBackdrop');

function showPaperModal() {
  paperModal.classList.remove('hidden');
  paperModal.setAttribute('aria-hidden', 'false');
}

function hidePaperModal() {
  paperModal.classList.add('hidden');
  paperModal.setAttribute('aria-hidden', 'true');
}

document.querySelectorAll('.js-open-paper').forEach((el) => {
  el.addEventListener('click', showPaperModal);
});
closePaper.addEventListener('click', hidePaperModal);
closePaperBackdrop.addEventListener('click', hidePaperModal);

document.addEventListener('keydown', (e) => {
  if (e.key !== 'Escape') return;
  if (!paperModal.classList.contains('hidden')) hidePaperModal();
});

const copyBibtexBtn = document.getElementById('copyBibtex');
const bibtexBlock = document.getElementById('bibtexBlock');
if (copyBibtexBtn && bibtexBlock) {
  const copySvg = copyBibtexBtn.querySelector('.bibtex-copy-svg');
  const checkSvg = copyBibtexBtn.querySelector('.bibtex-check-svg');
  const defaultAria = 'Copy BibTeX citation to clipboard';
  const defaultTitle = 'Copy';

  function showCopiedState() {
    if (copySvg) copySvg.classList.add('bibtex-icon-hidden');
    if (checkSvg) checkSvg.classList.remove('bibtex-icon-hidden');
    copyBibtexBtn.setAttribute('aria-label', 'Copied to clipboard');
    copyBibtexBtn.setAttribute('title', 'Copied');
  }

  function resetCopyButton() {
    if (copySvg) copySvg.classList.remove('bibtex-icon-hidden');
    if (checkSvg) checkSvg.classList.add('bibtex-icon-hidden');
    copyBibtexBtn.setAttribute('aria-label', defaultAria);
    copyBibtexBtn.setAttribute('title', defaultTitle);
  }

  copyBibtexBtn.addEventListener('click', async () => {
    const text = bibtexBlock.textContent || '';
    try {
      await navigator.clipboard.writeText(text.trimEnd() + '\n');
      showCopiedState();
      window.setTimeout(resetCopyButton, 2000);
    } catch {
      copyBibtexBtn.setAttribute('aria-label', 'Could not copy');
      copyBibtexBtn.setAttribute('title', 'Copy failed');
      window.setTimeout(() => {
        copyBibtexBtn.setAttribute('aria-label', defaultAria);
        copyBibtexBtn.setAttribute('title', defaultTitle);
      }, 2000);
    }
  });
}
