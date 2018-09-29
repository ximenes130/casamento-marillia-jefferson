module GuestsHelper
  def guests_table(guests)
    content_tag :table do
      guests.each do |guest|
        concat content_tag(
          :tr,
          content_tag(
            :td,
            (form_for guest, remote: true do |f|
              cell_content = guest.name
              cell_content << (f.hidden_field :confirmed, value: "true")
              cell_content << f.submit('Confirmar', class: 'confirm-guest btn right')
              cell_content.html_safe
            end)
          )
        )
      end
    end
  end
end
