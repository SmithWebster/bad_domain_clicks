<div>Error - click exists</div>
{% if this.request.get('refresh') and this.request.get('seconds') %}
<div>Going to redirect to {{ this.request.get('refresh') }} in {{ this.request.get('seconds') }} seconds</div>
{% endif %}
