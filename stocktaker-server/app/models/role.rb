class Role < ActiveRecord::Base
    belongs_to :employee
    belongs_to :product
    
end