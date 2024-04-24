const errorMessage = () => `
<div class="error-container">
  <span class="error">
    <svg class="error__icon" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ErrorIcon"
      tabindex="-1" title="Error">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m1 15h-2v-2h2zm0-4h-2V7h2z">
      </path>
    </svg>
    <div>
      <div class="error__text">Wystąpił błąd</div>
    </div>
    </span>
</div>
  `;

export default errorMessage;
