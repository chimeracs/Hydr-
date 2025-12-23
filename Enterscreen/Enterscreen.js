// Hydr∆ Enterscreen Logic

const VALID_CODES = new Set([
  "∆7","∆19","∆404","∆808","∆1337","∆9001","∆31415","∆271828","∆77777","∆999999",
  "∆A7","∆X9","∆K11","∆R∆1","∆HYD","∆VOID","∆CORE","∆NODE","∆FUSE","∆MYTH",
  "∆HX01","∆RX77","∆VX404","∆NX999","∆∆001","∆∆777","∆∆VOID","∆∆HYDR","∆∆CORE","∆∆GATE",
  "∆REGEN01","∆HEADS3","∆CUT1","∆SPAWN","∆UNSEAL","∆BYPASS","∆OVERFLOW","∆REWRITE","∆PHANTOM","∆ECHO",
  "∆H3AD5","∆0P3N","∆L0AD","∆R1FT","∆GL1TCH","∆CR∆SH","∆WAK3","∆WAKEUP","∆ASCEND","∆FINAL"
]);

document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("delta-input");
  const submit = document.getElementById("delta-submit");
  const screen = document.getElementById("enter-screen");
  const error = document.getElementById("error-screen");

  function validateCode() {
    const value = input.value.trim();

    if (VALID_CODES.has(value)) {
      screen.classList.add("fade-out");

      setTimeout(() => {
        window.location.href = "/index.html"; // homepage
      }, 600);
    } else {
      screen.style.display = "none";
      error.style.display = "flex";
    }
  }

  submit.addEventListener("click", validateCode);

  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") validateCode();
  });
});
