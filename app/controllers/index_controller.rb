class IndexController < ApplicationController
  def index
    @data = {
      histories: History.all.order(:date),
      honours:   Honour.all
    }
  end
end
