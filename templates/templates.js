// This file was automatically generated from calendar.soy.
// Please don't edit this file by hand.

if (typeof WorkWeek == 'undefined') { var WorkWeek = {}; }
if (typeof WorkWeek.templates == 'undefined') { WorkWeek.templates = {}; }
if (typeof WorkWeek.templates.calendar == 'undefined') { WorkWeek.templates.calendar = {}; }


WorkWeek.templates.calendar.cal = function(opt_data, opt_ignored) {
  return '<div class="yearCal"><div class="months"></div><table class="yearCal"><thead><tr><td colspan="7">' + soy.$$escapeHtml(opt_data.year) + '</td></tr><tr><td>S</td><td>M</td><td>T</td><td>W</td><td>T</td><td>F</td><td>S</td></tr></thead><tbody></tbody></table></div>';
};
