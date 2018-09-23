class IndexController < ApplicationController
    def index
        @data = {
            histories: History.all.order(:date)
        }
    end
end
